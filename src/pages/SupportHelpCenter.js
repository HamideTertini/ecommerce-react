import React from "react";

function SupportHelpCenter() {
  return (
    <div className="container mx-auto my-12 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Support & Help Center</h1>
        <p className="mb-4 text-gray-700">
          If you have any questions or issues, please reach out to our support team.
        </p>
        <ul className="space-y-4">
          <li className="border-b pb-2">
            <h3 className="font-medium text-gray-900">📧 Email:</h3>
            <p className="text-gray-700">support@example.com</p>
          </li>
          <li className="border-b pb-2">
            <h3 className="font-medium text-gray-900">📞 Phone:</h3>
            <p className="text-gray-700">+123 456 7890</p>
          </li>
          <li>
            <h3 className="font-medium text-gray-900">💬 Live Chat:</h3>
            <p className="text-gray-700">Available from 9 AM to 6 PM</p>
          </li>
        </ul>
        <div className="mt-6">
          <a
            href="mailto:support@example.com"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}

export default SupportHelpCenter;
