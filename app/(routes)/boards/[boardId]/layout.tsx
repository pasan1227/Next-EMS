// import { db } from '@/lib/db';
// import { auth } from '@clerk/nextjs';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { BoardNavbar } from './_components/board-navbar';

export async function generateMetadata({
  params,
}: {
  params: { boardId: string };
}) {
  // const { orgId } = auth();

  // if (!orgId) {
  //   return {
  //     title: 'Board',
  //   };
  // }

  const board = await prisma.board.findUnique({
    where: {
      id: params.boardId,
      // orgId,
    },
  });

  return {
    title: board?.title || 'Board',
  };
}

const BoardIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { boardId: string };
}) => {
  // const { orgId } = auth();

  // if (!orgId) {
  //   redirect('/select-org');
  // }

  const board = await prisma.board.findUnique({
    where: {
      id: params.boardId,
      // orgId,
    },
  });

  if (!board) {
    notFound();
  }

  return (
    <div
      className='relative bg-no-repeat container w-full h-full mx-auto bg-cover bg-center rounded-md'
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
    >
      <BoardNavbar data={board} />
      <div className='absolute inset-0 bg-black/10 rounded-md' />
      <main className='relative pt-28 h-full'>{children}</main>
    </div>
  );
};

export default BoardIdLayout;
