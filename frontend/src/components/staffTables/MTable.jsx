import React, { useState, useEffect } from "react";

const MTable = ({ tableData, onSubmit }) => {
  const [editableData, setEditableData] = useState(tableData);

  useEffect(() => {
    setEditableData(tableData);
  }, [tableData]);

  const handleInputChange = (e, index, field) => {
    const { value } = e.target;
    const updatedData = [...editableData];
    updatedData[index][field] = value;
    setEditableData(updatedData);
  };

  return (
    <div className="w-full max-w-4xl h-[450px] mt-24 overflow-y-auto border border-gray-300 relative flex flex-col">
      <table className="w-full border-collapse font-sans">
        <thead>
          <tr>
            <th className="bg-white px-3 py-2 text-left text-sm font-semibold border border-gray-300">
              Driver Name
            </th>
            <th className="bg-white px-3 py-2 text-left text-sm font-semibold border border-gray-300">
              Vehicle Type
            </th>
            <th className="bg-white px-3 py-2 text-left text-sm font-semibold border border-gray-300">
              Ward No.
            </th>
            <th className="bg-white px-3 py-2 text-left text-sm font-semibold border border-gray-300">
              Vehicle No.
            </th>
            <th className="bg-white px-3 py-2 text-left text-sm font-semibold border border-gray-300">
              Maintenance Time
            </th>
            <th className="bg-white px-3 py-2 text-left text-sm font-semibold border border-gray-300">
              Details
            </th>
            <th className="bg-white px-3 py-2 text-left text-sm font-semibold border border-gray-300">
              In-Charge Name
            </th>
            <th className="bg-white px-3 py-2 text-left text-sm font-semibold border border-gray-300">
              Note
            </th>
          </tr>
        </thead>
        <tbody>
          {editableData.map((row, index) => (
            <tr key={index}>
              <td className="p-2 border border-gray-300 whitespace-nowrap text-sm">
                <input
                  type="text"
                  value={row.driverName}
                  onChange={(e) => handleInputChange(e, index, "driverName")}
                  className="w-full"
                />
              </td>
              <td className="p-2 border border-gray-300 whitespace-nowrap text-sm">
                <input
                  type="text"
                  value={row.vehicleType}
                  onChange={(e) => handleInputChange(e, index, "vehicleType")}
                  className="w-full"
                />
              </td>
              <td className="p-2 border border-gray-300 whitespace-nowrap text-sm">
                <input
                  type="text"
                  value={row.wardNo}
                  onChange={(e) => handleInputChange(e, index, "wardNo")}
                  className="w-full"
                />
              </td>
              <td className="p-2 border border-gray-300 whitespace-nowrap text-sm">
                <input
                  type="text"
                  value={row.vehicleNumber}
                  onChange={(e) => handleInputChange(e, index, "vehicleNumber")}
                  className="w-full"
                />
              </td>
              <td className="p-2 border border-gray-300 whitespace-nowrap text-sm">
                <input
                  type="text"
                  value={row.maintenanceTime}
                  onChange={(e) =>
                    handleInputChange(e, index, "maintenanceTime")
                  }
                  className="w-full"
                />
              </td>
              <td className="p-2 border border-gray-300 whitespace-nowrap text-sm">
                <input
                  type="text"
                  value={row.details}
                  onChange={(e) => handleInputChange(e, index, "details")}
                  className="w-full"
                />
              </td>
              <td className="p-2 border border-gray-300 whitespace-nowrap text-sm">
                <input
                  type="text"
                  value={row.inChargeName}
                  onChange={(e) => handleInputChange(e, index, "inChargeName")}
                  className="w-full"
                />
              </td>
              <td className="p-2 border border-gray-300 whitespace-nowrap text-sm">
                <input
                  type="text"
                  value={row.note}
                  onChange={(e) => handleInputChange(e, index, "note")}
                  className="w-full"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Submit Button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white py-2 px-6 rounded shadow-lg hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MTable;