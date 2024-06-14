import "react-tabs/style/react-tabs.css";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Schedule = () => {
  return (
    <div>
      <section className="">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-rows-1 md:grid-rows-2 items-center">
            <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Working Schedule
            </h2>
            <div>
              <Tabs className="text-center">
                <TabList>
                  <Tab>Sunday</Tab>
                  <Tab>Monday</Tab>
                  <Tab>Tuesday</Tab>
                  <Tab>Wednesday</Tab>
                  <Tab>Thursday</Tab>
                  <Tab>Friday</Tab>
                  <Tab>Saturday</Tab>
                </TabList>

                <TabPanel>
                  <table className="table-auto w-full">
                    <thead>
                      <tr>
                        <th className="px-4 py-2">Time</th>
                        <th className="px-4 py-2">Type</th>
                        <th className="px-4 py-2">Workout</th>
                        <th className="px-4 py-2">Trainner</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">06.00 - 07.00</td>
                        <td className="border px-4 py-2">Beginners</td>
                        <td className="border px-4 py-2">
                          Mixed Circuit Cardio Workout
                        </td>
                        <td className="border px-4 py-2">Floyd Miles</td>
                      </tr>
                    </tbody>
                  </table>
                </TabPanel>
                <TabPanel>
                  <table className="table-auto w-full">
                    <thead>
                      <tr>
                        <th className="px-4 py-2">Time</th>
                        <th className="px-4 py-2">Type</th>
                        <th className="px-4 py-2">Workout</th>
                        <th className="px-4 py-2">Trainner</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">06.00 - 07.00</td>
                        <td className="border px-4 py-2">Beginners</td>
                        <td className="border px-4 py-2">
                          Mixed Circuit Cardio Workout
                        </td>
                        <td className="border px-4 py-2">Floyd Miles</td>
                      </tr>
                    </tbody>
                  </table>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
