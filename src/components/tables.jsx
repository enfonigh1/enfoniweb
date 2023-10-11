import React from "react";
// import Menubar from '../components/menubar'

function Table() {
  return (
    <div className="container mx-auto mb-4 md:mt-6">
      {/* <Menubar /> */}
      <h2 className="text-2xl font-semibold mb-1 text-center md:text-left">Appointment History</h2>
      <small className="text-zinc-500 text-xs font-normal font-['Lato'] text-center md:text-left block">
        Below you can find your appointment history
      </small>
      <div >
        <table className=" mt-4 ml-2 bg-red-100">
          <thead>
            <tr>
              <th className="border border-gray-300 py-2 px-4">
                {" "}
                <p className="text-[12px]">Date</p>
              </th>
              <th className="border border-gray-300 py-2 px-4">
                {" "}
                <p className="text-[12px]">Appointment</p>
              </th>
              <th className="border border-gray-300 py-2 px-4">
                {" "}
                <p className="text-[12px]">Location</p>
              </th>
              <th className="border border-gray-300 py-2 px-4">
                {" "}
                <p className="text-[12px]">Duration</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 py-2 px-4">
                <p className="text-[12px]">9/09/2023</p>
              </td>
              <td className="border border-gray-300 py-2 px-4">
                <p className="text-[12px]">2:30pm</p>
              </td>
              <td className="border border-gray-300 py-2 px-4">
                <p className="text-[12px]">Royal Ground</p>
              </td>
              <td className="border border-gray-300 py-2 px-4">
                <p className="text-[12px]">35 mins</p>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">
                <p className="text-[12px]">8/09/2023</p>
              </td>
              <td className="border border-gray-300 py-2 px-4">
                <p className="text-[12px]">3:00pm</p>
              </td>
              <td className="border border-gray-300 py-2 px-4">
                <p className="text-[12px]">Royal Parade Ground</p>
              </td>
              <td className="border border-gray-300 py-2 px-4">
                <p className="text-[12px]">1hr</p>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 py-2 px-4">7/09/2023</td>
              <td className="border border-gray-300 py-2 px-4">
                <p className="text-[12px]">5:00pm</p>
              </td>
              <td className="border border-gray-300 py-2 px-4">
                <p className="text-[12px]">Royal Parade Ground</p>
              </td>
              <td className="border border-gray-300 py-2 px-4">
                <p className="text-[12px]">10mins</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
