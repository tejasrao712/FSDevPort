// import React from 'react';

// const Pricing: React.FC = () => {
//   return (
//     <section id="pricing" className="py-20 bg-gray-900 text-white">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-8">Pricing</h2>
//         <div className="overflow-x-auto">
//           <table className="table-auto w-full max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">Service</th>
//                 <th className="px-4 py-2">Price</th>
//                 <th className="px-4 py-2">Price</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="border px-4 py-2">Static Page</td>
//                 <td className="border px-4 py-2">Static Page</td>
//                 <td className="border px-4 py-2">$50/hr</td>
//               </tr>
//               <tr>
//                 <td className="border px-4 py-2">Dynamic Page</td>
//                 <td className="border px-4 py-2">Static Page</td>
//                 <td className="border px-4 py-2">$70/hr</td>
//               </tr>
//               <tr>
//                 <td className="border px-4 py-2">Hosting (Annual)</td>
//                 <td className="border px-4 py-2">Static Page</td>
//                 <td className="border px-4 py-2">$100/year</td>
//               </tr>
//               <tr>
//                 <td className="border px-4 py-2 font-bold">Average Overall Price</td>
//                 <td className="border px-4 py-2">Static Page</td>
//                 <td className="border px-4 py-2 font-bold">$500</td>
//               </tr>
//               <tr>
//                 <td className="border px-4 py-2 font-bold">Average Overall Price</td>
//                 <td className="border px-4 py-2">Static Page</td>
//                 <td className="border px-4 py-2 font-bold">$500</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">PLANS AND PRICING</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg">
            <thead>
              <tr>
                <th className="px-4 py-2">Package</th>
                <th className="px-4 py-2">Price (USD)</th>
                <th className="px-4 py-2">Duration (Weeks)</th>
                <th className="px-4 py-2">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-700">
                <td className="border px-4 py-2">Basic</td>
                <td className="border px-4 py-2">$18</td>
                <td className="border px-4 py-2">4 Weeks</td>
                <td className="border px-4 py-2">
                  Responsive one-page website including slider, contact form, social links, Google Maps, blog.
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Standard</td>
                <td className="border px-4 py-2">$125</td>
                <td className="border px-4 py-2">6 Weeks</td>
                <td className="border px-4 py-2">
                  7 Page Fully Responsive website + Fast Plugins + Support + Payment gateway + Color branding
                </td>
              </tr>
              <tr className="bg-gray-700">
                <td className="border px-4 py-2">Premium</td>
                <td className="border px-4 py-2">$245</td>
                <td className="border px-4 py-2">8 Weeks</td>
                <td className="border px-4 py-2">
                  12 pages E-commerce functionality + Product and content upload + Speed, Security, and SEO Optimization
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Enterprise</td>
                <td className="border px-4 py-2">$500</td>
                <td className="border px-4 py-2">10 Weeks</td>
                <td className="border px-4 py-2">
                  Customized solution with advanced features, scalable infrastructure, dedicated support, and maintenance.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
