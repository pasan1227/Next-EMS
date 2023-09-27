import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { monthlyEpfEtfData } from "@/constants/sample/monthly-Epf-etf-data";
import useEmployee from "@/hooks/useEmployee";
import { columns } from "./components/columns";
import EPFETFChart from "./components/epf-etf-chart";
import { EPFEPTFColumns } from "./components/epf-etf-columns";
import { PayrollDataTable } from "./components/payroll-data-table";
import Image from "next/image";

const PayrollsPage = async () => {
  const { getAllEmployees } = useEmployee();
  const employeeData = await getAllEmployees();
  return (
    <div>
      <Tabs defaultValue="payroll">
        <TabsList>
          <TabsTrigger value="payroll">Payroll</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="payroll" className="mt-5">
          <PayrollDataTable columns={columns} data={employeeData} />
        </TabsContent>
        <TabsContent value="analytics" className="mt-5">
          <div>
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center">
                <div>
                  {" "}
                  <TabsList className="bg-[#f1f5f9] h-[80px]">
                    <TabsTrigger
                      className="w-28 h-16 data-[state=active]:border-b-4 border-[#2ebdaa] bg-white p-2 m-4"
                      value="all"
                    >
                      <div className="flex gap-2">
                        <div>
                          <Image
                            src="/icons/department/all-icon.png"
                            alt="Image 1"
                            width={25}
                            height={25}
                          />
                        </div>
                        <div className="my-auto">All</div>
                      </div>
                    </TabsTrigger>

                    <TabsTrigger
                      className="w-28 h-16 data-[state=active]:border-b-4 border-[#2ebdaa] bg-white p-2 m-4 "
                      value="software"
                    >
                      <div className="flex gap-2">
                        <div>
                          <Image
                            src="/icons/department/software-icon.png"
                            alt="Image 1"
                            width={35}
                            height={35}
                          />
                        </div>
                        <div className="my-auto">Software</div>
                      </div>
                    </TabsTrigger>

                    <TabsTrigger
                      className="w-28 h-16 data-[state=active]:border-b-4 border-[#2ebdaa] bg-white p-2 m-4"
                      value="hr"
                    >
                      <div className="flex gap-2">
                        <div>
                          <Image
                            src="/icons/department/hr-new-icon.png"
                            alt="Image 2"
                            width={35}
                            height={35}
                          />
                        </div>
                        <div className="my-auto">HR</div>
                      </div>
                    </TabsTrigger>

                    <TabsTrigger
                      className="w-28 h-16 data-[state=active]:border-b-4 border-[#2ebdaa] bg-white p-2 m-4"
                      value="Department_3"
                    >
                      <div className="flex gap-2">
                        <div>
                          <Image
                            src="/icons/department/digital-artist-icon.png"
                            alt="Image 1"
                            width={35}
                            height={35}
                          />
                        </div>
                        <div className="my-auto">
                          Digital <br></br> Artists
                        </div>
                      </div>
                    </TabsTrigger>

                    <TabsTrigger
                      className="w-28 h-16 data-[state=active]:border-b-4 border-[#2ebdaa] bg-white p-2 m-4"
                      value="Department_4"
                    >
                      <div className="flex gap-2">
                        <div>
                          <Image
                            src="/icons/department/all-icon.png"
                            alt="Image 1"
                            width={35}
                            height={35}
                          />
                        </div>
                        <div className="my-auto">Marketing</div>
                      </div>
                    </TabsTrigger>

                    {/* <TabsTrigger
                      className="w-28 h-16 data-[state=active]:border-b-4 border-[#2ebdaa] bg-white p-2 m-4"
                      value="Department_5"
                    >
                      <div className="flex gap-2">
                        <div>
                          <Image
                            src="/icons/department/all-icon.png"
                            alt="Image 1"
                            width={35}
                            height={35}
                          />
                        </div>
                        <div className="my-auto">Dep 5</div>
                      </div>
                    </TabsTrigger> */}
                  </TabsList>
                </div>
              </div>

              <TabsContent value="all">
                
                {/* --------------------------------------------------------ALL SECTION CONTENTS HERE------------------------------------------------------------- */}
                <div>
                  <div >
                    <div className="text-lg font-semibold mb-4">Recent Months</div>
                    <div>
                      <div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                          <Card className="drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                August
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                                7500.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +20.1% from last month
                              </p>
                            </CardContent>
                          </Card>

                          <Card className=" drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                July
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                                8900.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +180.1% from last month
                              </p>
                            </CardContent>
                          </Card>
                          <Card className=" drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                June
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                                5600.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +19% from last month
                              </p>
                            </CardContent>
                          </Card>
                          <Card className="drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                May
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                               17000.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +201 since last hour
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                    {/* <div className="grid grid-cols-2 gap-4 mt-8"> */}
                    <div className="bg-slate-200 mt-10 p-4 drop-shadow-md rounded-lg ">
                      <div className="text-xl font-semibold text-center mb-4">
                        ETF & EPF Contribution
                      </div>
                      <Tabs defaultValue="account">
                        <div className="text-center">
                          <TabsList>
                            <TabsTrigger value="account">Monthly</TabsTrigger>
                            <TabsTrigger value="password">Yearly</TabsTrigger>
                          </TabsList>
                        </div>

                        <TabsContent value="account">
                          <div >
                            {/* grid column1 starts here */}
                            <div className="bg-[#fff]  rounded-lg p-4">
                              <div className="text-sm font-semibold my-2 text-center">
                                Table of ETF and EPF Contribution History
                              </div>
                              <div>
                                <DataTable
                                  columns={EPFEPTFColumns}
                                  data={monthlyEpfEtfData}
                                  placeholder="Month"
                                  searchFilter="month"
                                />
                              </div>
                            </div>
                            {/* grid column1 ends here */}

                            {/* grid column2 starts here */}
                            <div className="bg-[#fff]  rounded-lg p-2 mt-12">
                              <div className="text-sm font-semibold my-2 text-center">
                                ETF & EPF Contribution Graphical Visualization
                              </div>
                              <div>
                                <EPFETFChart />
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="password">
                          <div >
                            {/* grid column1 starts here */}
                            <div className="bg-[#fff]  rounded-lg  p-4">
                              <div className="text-sm font-semibold my-2 text-center">
                                Table of ETF and EPF Contribution History
                              </div>
                              <div>
                                <DataTable
                                  columns={EPFEPTFColumns}
                                  data={monthlyEpfEtfData}
                                  placeholder="Month"
                                  searchFilter="month"
                                />
                              </div>
                            </div>
                            {/* grid column1 ends here */}

                            {/* grid column2 starts here */}
                            <div className="bg-[#fff] rounded-lg  p-2 mt-12">
                              <div className="text-sm font-semibold my-2 text-center">
                                ETF & EPF Contribution Graphical Visualization
                              </div>
                              <div>
                                <EPFETFChart />
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="software">
                {/* --------------------------------------------------------SOFTWARE SECTION CONTENTS HERE------------------------------------------------------------- */}

                <div>
                  <div >
                    <div className="text-lg font-semibold mb-4">Recent Months</div>
                    <div>
                      <div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                          <Card className="drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                August
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                                12500.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +20.1% from last month
                              </p>
                            </CardContent>
                          </Card>

                          <Card className=" drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                July
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                                10700.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +180.1% from last month
                              </p>
                            </CardContent>
                          </Card>
                          <Card className=" drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                June
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                                14270.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +19% from last month
                              </p>
                            </CardContent>
                          </Card>
                          <Card className="drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                May
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                                11400.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +201 since last hour
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                    {/* <div className="grid grid-cols-2 gap-4 mt-8"> */}
                    <div className="bg-slate-200 mt-10 p-4 drop-shadow-md rounded-lg ">
                      <div className="text-xl font-semibold text-center mb-4">
                        ETF & EPF Contribution
                      </div>
                      <Tabs defaultValue="account">
                        <div className="text-center">
                          <TabsList>
                            <TabsTrigger value="account">Monthly</TabsTrigger>
                            <TabsTrigger value="password">Yearly</TabsTrigger>
                          </TabsList>
                        </div>

                        <TabsContent value="account">
                          <div >
                            {/* grid column1 starts here */}
                            <div className="bg-[#fff]  rounded-lg p-4">
                              <div className="text-sm font-semibold my-2 text-center">
                                Table of ETF and EPF Contribution History
                              </div>
                              <div>
                                <DataTable
                                  columns={EPFEPTFColumns}
                                  data={monthlyEpfEtfData}
                                  placeholder="Month"
                                  searchFilter="month"
                                />
                              </div>
                            </div>
                            {/* grid column1 ends here */}

                            {/* grid column2 starts here */}
                            <div className="bg-[#fff]  rounded-lg p-2 mt-12">
                              <div className="text-sm font-semibold my-2 text-center">
                                ETF & EPF Contribution Graphical Visualization
                              </div>
                              <div>
                                <EPFETFChart />
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="password">
                          <div >
                            {/* grid column1 starts here */}
                            <div className="bg-[#fff]  rounded-lg  p-4">
                              <div className="text-sm font-semibold my-2 text-center">
                                Table of ETF and EPF Contribution History
                              </div>
                              <div>
                                <DataTable
                                  columns={EPFEPTFColumns}
                                  data={monthlyEpfEtfData}
                                  placeholder="Month"
                                  searchFilter="month"
                                />
                              </div>
                            </div>
                            {/* grid column1 ends here */}

                            {/* grid column2 starts here */}
                            <div className="bg-[#fff] rounded-lg  p-2 mt-12">
                              <div className="text-sm font-semibold my-2 text-center">
                                ETF & EPF Contribution Graphical Visualization
                              </div>
                              <div>
                                <EPFETFChart />
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="hr">
                {/* --------------------------------------------------------HR SECTION CONTENTS HERE--------------------------------------------------------------- */}
                <div>
                  <div >
                    <div className="text-lg font-semibold mb-4">Recent Months</div>
                    <div>
                      <div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                          <Card className="drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                August
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                                9900.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +20.1% from last month
                              </p>
                            </CardContent>
                          </Card>

                          <Card className=" drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                July
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                              5600.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +180.1% from last month
                              </p>
                            </CardContent>
                          </Card>
                          <Card className=" drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                June
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                                11000.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +19% from last month
                              </p>
                            </CardContent>
                          </Card>
                          <Card className="drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                May
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                                23000.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +201 since last hour
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                    {/* <div className="grid grid-cols-2 gap-4 mt-8"> */}
                    <div className="bg-slate-200 mt-10 p-4 drop-shadow-md rounded-lg ">
                      <div className="text-xl font-semibold text-center mb-4">
                        ETF & EPF Contribution
                      </div>
                      <Tabs defaultValue="account">
                        <div className="text-center">
                          <TabsList>
                            <TabsTrigger value="account">Monthly</TabsTrigger>
                            <TabsTrigger value="password">Yearly</TabsTrigger>
                          </TabsList>
                        </div>

                        <TabsContent value="account">
                          <div >
                            {/* grid column1 starts here */}
                            <div className="bg-[#fff]  rounded-lg p-4">
                              <div className="text-sm font-semibold my-2 text-center">
                                Table of ETF and EPF Contribution History
                              </div>
                              <div>
                                <DataTable
                                  columns={EPFEPTFColumns}
                                  data={monthlyEpfEtfData}
                                  placeholder="Month"
                                  searchFilter="month"
                                />
                              </div>
                            </div>
                            {/* grid column1 ends here */}

                            {/* grid column2 starts here */}
                            <div className="bg-[#fff]  rounded-lg p-2 mt-12">
                              <div className="text-sm font-semibold my-2 text-center">
                                ETF & EPF Contribution Graphical Visualization
                              </div>
                              <div>
                                <EPFETFChart />
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="password">
                          <div >
                            {/* grid column1 starts here */}
                            <div className="bg-[#fff]  rounded-lg  p-4">
                              <div className="text-sm font-semibold my-2 text-center">
                                Table of ETF and EPF Contribution History
                              </div>
                              <div>
                                <DataTable
                                  columns={EPFEPTFColumns}
                                  data={monthlyEpfEtfData}
                                  placeholder="Month"
                                  searchFilter="month"
                                />
                              </div>
                            </div>
                            {/* grid column1 ends here */}

                            {/* grid column2 starts here */}
                            <div className="bg-[#fff] rounded-lg  p-2 mt-12">
                              <div className="text-sm font-semibold my-2 text-center">
                                ETF & EPF Contribution Graphical Visualization
                              </div>
                              <div>
                                <EPFETFChart />
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>
                <div>HR Section Contents here</div>
              </TabsContent>
              <TabsContent value="Department_3">
                {/* --------------------------------------------------------DIGITAL ARTIST SECTION CONTENTS HERE----------------------------------------------------*/}
                <div>
                  <div >
                    <div className="text-lg font-semibold mb-4">Recent Months</div>
                    <div>
                      <div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                          <Card className="drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                August
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                                12500.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +20.1% from last month
                              </p>
                            </CardContent>
                          </Card>

                          <Card className=" drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                July
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                                10700.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +180.1% from last month
                              </p>
                            </CardContent>
                          </Card>
                          <Card className=" drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                June
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                                14270.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +19% from last month
                              </p>
                            </CardContent>
                          </Card>
                          <Card className="drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                May
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                                11400.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +201 since last hour
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                    {/* <div className="grid grid-cols-2 gap-4 mt-8"> */}
                    <div className="bg-slate-200 mt-10 p-4 drop-shadow-md rounded-lg ">
                      <div className="text-xl font-semibold text-center mb-4">
                        ETF & EPF Contribution
                      </div>
                      <Tabs defaultValue="account">
                        <div className="text-center">
                          <TabsList>
                            <TabsTrigger value="account">Monthly</TabsTrigger>
                            <TabsTrigger value="password">Yearly</TabsTrigger>
                          </TabsList>
                        </div>

                        <TabsContent value="account">
                          <div >
                            {/* grid column1 starts here */}
                            <div className="bg-[#fff]  rounded-lg p-4">
                              <div className="text-sm font-semibold my-2 text-center">
                                Table of ETF and EPF Contribution History
                              </div>
                              <div>
                                <DataTable
                                  columns={EPFEPTFColumns}
                                  data={monthlyEpfEtfData}
                                  placeholder="Month"
                                  searchFilter="month"
                                />
                              </div>
                            </div>
                            {/* grid column1 ends here */}

                            {/* grid column2 starts here */}
                            <div className="bg-[#fff]  rounded-lg p-2 mt-12">
                              <div className="text-sm font-semibold my-2 text-center">
                                ETF & EPF Contribution Graphical Visualization
                              </div>
                              <div>
                                <EPFETFChart />
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="password">
                          <div >
                            {/* grid column1 starts here */}
                            <div className="bg-[#fff]  rounded-lg  p-4">
                              <div className="text-sm font-semibold my-2 text-center">
                                Table of ETF and EPF Contribution History
                              </div>
                              <div>
                                <DataTable
                                  columns={EPFEPTFColumns}
                                  data={monthlyEpfEtfData}
                                  placeholder="Month"
                                  searchFilter="month"
                                />
                              </div>
                            </div>
                            {/* grid column1 ends here */}

                            {/* grid column2 starts here */}
                            <div className="bg-[#fff] rounded-lg  p-2 mt-12">
                              <div className="text-sm font-semibold my-2 text-center">
                                ETF & EPF Contribution Graphical Visualization
                              </div>
                              <div>
                                <EPFETFChart />
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>
                <div>Digital Artist contents here</div>
              </TabsContent>
              <TabsContent value="Department_4">
                {/* --------------------------------------------------------DEPARTMENT 4 SECTION CONTENTS HERE------------------------------------------------------ */}
                <div>
                  <div >
                    <div className="text-lg font-semibold mb-4">Recent Months</div>
                    <div>
                      <div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                          <Card className="drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                August
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                                12500.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +20.1% from last month
                              </p>
                            </CardContent>
                          </Card>

                          <Card className=" drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                July
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                                10700.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +180.1% from last month
                              </p>
                            </CardContent>
                          </Card>
                          <Card className=" drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                June
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                                14270.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +19% from last month
                              </p>
                            </CardContent>
                          </Card>
                          <Card className="drop-shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-semibold text-black">
                                May
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-black">
                                11400.00
                              </div>
                              <p className="text-xs text-muted-foreground text-black">
                                +201 since last hour
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                    {/* <div className="grid grid-cols-2 gap-4 mt-8"> */}
                    <div className="bg-slate-200 mt-10 p-4 drop-shadow-md rounded-lg ">
                      <div className="text-xl font-semibold text-center mb-4">
                        ETF & EPF Contribution
                      </div>
                      <Tabs defaultValue="account">
                        <div className="text-center">
                          <TabsList>
                            <TabsTrigger value="account">Monthly</TabsTrigger>
                            <TabsTrigger value="password">Yearly</TabsTrigger>
                          </TabsList>
                        </div>

                        <TabsContent value="account">
                          <div >
                            {/* grid column1 starts here */}
                            <div className="bg-[#fff]  rounded-lg p-4">
                              <div className="text-sm font-semibold my-2 text-center">
                                Table of ETF and EPF Contribution History
                              </div>
                              <div>
                                <DataTable
                                  columns={EPFEPTFColumns}
                                  data={monthlyEpfEtfData}
                                  placeholder="Month"
                                  searchFilter="month"
                                />
                              </div>
                            </div>
                            {/* grid column1 ends here */}

                            {/* grid column2 starts here */}
                            <div className="bg-[#fff]  rounded-lg p-2 mt-12">
                              <div className="text-sm font-semibold my-2 text-center">
                                ETF & EPF Contribution Graphical Visualization
                              </div>
                              <div>
                                <EPFETFChart />
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="password">
                          <div >
                            {/* grid column1 starts here */}
                            <div className="bg-[#fff]  rounded-lg  p-4">
                              <div className="text-sm font-semibold my-2 text-center">
                                Table of ETF and EPF Contribution History
                              </div>
                              <div>
                                <DataTable
                                  columns={EPFEPTFColumns}
                                  data={monthlyEpfEtfData}
                                  placeholder="Month"
                                  searchFilter="month"
                                />
                              </div>
                            </div>
                            {/* grid column1 ends here */}

                            {/* grid column2 starts here */}
                            <div className="bg-[#fff] rounded-lg  p-2 mt-12">
                              <div className="text-sm font-semibold my-2 text-center">
                                ETF & EPF Contribution Graphical Visualization
                              </div>
                              <div>
                                <EPFETFChart />
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>
                <div>Digital Marketing</div>
              </TabsContent>
              <TabsContent value="Department_5">
                {/* --------------------------------------------------------DEPARTMENT 5 SECTION CONTENTS HERE------------------------------------------------------ */}
                <div>Department 5</div>
              </TabsContent>
            </Tabs>
          </div>

          {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}

          {/* grid column 2 ends here */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PayrollsPage;
