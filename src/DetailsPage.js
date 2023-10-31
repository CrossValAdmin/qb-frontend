import React from 'react';
import { useLocation } from 'react-router-dom';

function RenderObject({ data }) {
    if (!data || typeof data !== 'object') return null;

    return (
        <div style={{ paddingLeft: '20px' }}>
            {Object.keys(data).map((key, index) => {
                if (typeof data[key] === 'object' && data[key] !== null) {
                    return (
                        <div key={index}>
                            <strong>{key}:</strong>
                            <RenderObject data={data[key]} />
                        </div>
                    );
                }
                return (
                    <div key={index}>
                        <strong>{key}:</strong> {data[key]}
                    </div>
                );
            })}
        </div>
    );
}

function DetailsPage() {
    const location = useLocation();
    const fetchedData = location.state?.data;

    return (
        <div>
            <h2>Details:</h2>
            <RenderObject data={fetchedData} />
            <button onClick={() => window.history.back()}>Go Back</button>
        </div>
    );
}
export default DetailsPage;

// function PurchaseTable({ purchases }) {
//     if (!purchases.length) return null;

//     // Flattening all purchases and then getting the headers.
//     const flattenedPurchases = purchases.map(purchase => flattenObject(purchase));
//     const headers = Object.keys(flattenedPurchases[0]);

//     return (
//         <table border="1">
//             <thead>
//                 <tr>
//                     {headers.map(header => (
//                         <th key={header}>{header}</th>
//                     ))}
//                 </tr>
//             </thead>
//             <tbody>
//                 {flattenedPurchases.map((purchase, index) => (
//                     <tr key={index}>
//                         {headers.map(header => (
//                             <td key={header}>{purchase[header]}</td>
//                         ))}
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// }

// function DetailsPage() {
//     const location = useLocation();
//     const fetchedData = location.state?.data;
//     const queryResponse = fetchedData?.QueryResponse;
//     return (
//         <div>
//             <h2>Details:</h2>
//             {queryResponse && (
//                 <div>
//                     <h3>Purchase:</h3>
//                     <PurchaseTable purchases={queryResponse.Purchase} />
//                     <div>
//                         <h3>maxResults:</h3>
//                         <p>{queryResponse.maxResults}</p>
//                     </div>
//                     <div>
//                         <h3>startPosition:</h3>
//                         <p>{queryResponse.startPosition}</p>
//                     </div>
//                 </div>
//             )}
//             <button onClick={() => window.history.back()}>Go Back</button>
//         </div>
//     );
// }
// export default DetailsPage;

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function RecursiveDisplay({ data }) {
//     if (Array.isArray(data)) {
//         return (
//             <ul>
//                 {data.map((item, index) => (
//                     <li key={index}>
//                         <RecursiveDisplay data={item} />
//                     </li>
//                 ))}
//             </ul>
//         );
//     }

//     if (typeof data === 'object') {
//         return (
//             <ul>
//                 {Object.entries(data).map(([key, value]) => (
//                     <li key={key}>
//                         <strong>{key}:</strong> <RecursiveDisplay data={value} />
//                     </li>
//                 ))}
//             </ul>
//         );
//     }

//     return <>{data}</>;
// }

// function DetailsPage({ data }) {
//     const location = useLocation();
//     const fetchedData = location.state?.data;  // Renamed to avoid naming collision
//     const queryResponse = fetchedData?.QueryResponse;

//     return (
//         <div>
//             <h2>Details:</h2>
//             {queryResponse && (
//                 <div>
//                     <h3>Purchase:</h3>
//                     <RecursiveDisplay data={queryResponse.Purchase} />

//                     <h3>maxResults:</h3>
//                     <p>{queryResponse.maxResults}</p>

//                     <h3>startPosition:</h3>
//                     <p>{queryResponse.startPosition}</p>
//                 </div>
//             )}
//             <button onClick={() => window.history.back()}>Go Back</button>
//         </div>
//     );
// }

// export default DetailsPage;