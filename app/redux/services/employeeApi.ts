import { Employee } from '@prisma/client';
import { apiSlice } from './api';

export const employeeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query<Employee[], void>({
      query: () => '/employees',
    }),
    getEmployeeById: builder.query<Employee, { employeeId: string }>({
      query: ({ employeeId }) => `/employees/${employeeId}`,
    }),
    addEmployee: builder.mutation<Employee, Partial<Employee>>({
      query: (body) => ({
        url: '/employees',
        method: 'POST',
        body,
      }),
    }),
    updateEmployee: builder.mutation<
      Employee,
      { employeeId: string | undefined; body: Partial<Employee> }
    >({
      query: ({ employeeId, body }) => ({
        url: `/employees/${employeeId}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useGetEmployeeByIdQuery,
  useAddEmployeeMutation,
  useUpdateEmployeeMutation,
} = employeeApi;
