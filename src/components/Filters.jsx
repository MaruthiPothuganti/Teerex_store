import React from "react";

const filterTypes = [
  {
    name: "Colour",
    types: ["Red", "Blue", "Green"],
  },
  {
    name: "Gender",
    types: ["Red", "Blue", "Green"],
  },
  {
    name: "Price",
    types: ["0-Rs250", "Rs251-450", "Rs450"],
  },
  {
    name: "Type",
    types: ["Polo", "Hoodie", "Basic"],
  },
];

export const Filters = () => {
  return (
    <section>
      <div className="flex ">
        <h2>Filters</h2>
        <span>Clear</span>
      </div>
      <div>
        <ul>
          <h2 className="font-semibold text-lg">Colour</h2>
          <li>
            <input type="checkbox" name="red" id="red" />
            <label htmlFor="red">Red</label>
          </li>
          <li>
            <input type="checkbox" name="blue" id="blue" />
            <label htmlFor="blue">Blue</label>
          </li>
          <li>
            <input type="checkbox" name="green" id="green" />
            <label htmlFor="green">Green</label>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <h2 className="font-semibold text-lg">Gender</h2>
          <li>
            <input type="checkbox" name="men" id="men" />
            <label htmlFor="men">Men</label>
          </li>
          <li>
            <input type="checkbox" name="women" id="women" />
            <label htmlFor="women">Women</label>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <h2 className="font-semibold text-lg">Price</h2>
          <li>
            <input type="checkbox" name="rs250" id="rs250" />
            <label htmlFor="rs250">0 - Rs250</label>
          </li>
          <li>
            <input type="checkbox" name="251to450" id="251to450" />
            <label htmlFor="251to450">Rs 251 - 450</label>
          </li>
          <li>
            <input type="checkbox" name="rs450" id="rs450" />
            <label htmlFor="rs450">Rs 450</label>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <h2 className="font-semibold text-lg">Type</h2>
          <li>
            <input type="checkbox" name="polo" id="polo" />
            <label htmlFor="polo">Polo</label>
          </li>
          <li>
            <input type="checkbox" name="hoodie" id="hoodie" />
            <label htmlFor="hoodie">Hoodie</label>
          </li>
          <li>
            <input type="checkbox" name="basic" id="basic" />
            <label htmlFor="basic">Basic</label>
          </li>
        </ul>
      </div>
    </section>
  );
};

//  <div>
//         <ul>
//           <h2 className="font-semibold text-lg">Gender</h2>
//           <li>
//             <input type="checkbox" name="men" id="men" />
//             <label htmlFor="men">Men</label>
//           </li>
//           <li>
//             <input type="checkbox" name="women" id="women" />
//             <label htmlFor="women">Women</label>
//           </li>
//         </ul>
//       </div>

//       <div>
//         <ul>
//           <h2 className="font-semibold text-lg">Price</h2>
//           <li>
//             <input type="checkbox" name="rs250" id="rs250" />
//             <label htmlFor="rs250">0 - Rs250</label>
//           </li>
//           <li>
//             <input type="checkbox" name="251to450" id="251to450" />
//             <label htmlFor="251to450">Rs 251 - 450</label>
//           </li>
//           <li>
//             <input type="checkbox" name="rs450" id="rs450" />
//             <label htmlFor="rs450">Rs 450</label>
//           </li>
//         </ul>
//       </div>

//       <div>
//         <ul>
//           <h2 className="font-semibold text-lg">Type</h2>
//           <li>
//             <input type="checkbox" name="polo" id="polo" />
//             <label htmlFor="polo">Polo</label>
//           </li>
//           <li>
//             <input type="checkbox" name="hoodie" id="hoodie" />
//             <label htmlFor="hoodie">Hoodie</label>
//           </li>
//           <li>
//             <input type="checkbox" name="basic" id="basic" />
//             <label htmlFor="basic">Basic</label>
//           </li>
//         </ul>
//       </div>
