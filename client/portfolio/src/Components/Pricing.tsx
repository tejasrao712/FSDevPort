import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Pricing</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg">
            <thead>
              <tr>
                <th className="px-4 py-2">Service</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Static Page</td>
                <td className="border px-4 py-2">Static Page</td>
                <td className="border px-4 py-2">$50/hr</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Dynamic Page</td>
                <td className="border px-4 py-2">Static Page</td>
                <td className="border px-4 py-2">$70/hr</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Hosting (Annual)</td>
                <td className="border px-4 py-2">Static Page</td>
                <td className="border px-4 py-2">$100/year</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">Average Overall Price</td>
                <td className="border px-4 py-2">Static Page</td>
                <td className="border px-4 py-2 font-bold">$500</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">Average Overall Price</td>
                <td className="border px-4 py-2">Static Page</td>
                <td className="border px-4 py-2 font-bold">$500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
