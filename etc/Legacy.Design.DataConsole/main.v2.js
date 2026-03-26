    consoleData.innerHTML=`
    <table>
        <tbody>
            <tr><td>
                <details open>
                    <summary>Average</summary>
                    

                    <ul>
                        <li>SampleSize: ${sampleSize}</li>
                        <li>TotalSum: ${totalSum}</li>
                    </ul>
                </details>       
            
            </td><td>: ${average}</td></tr>
            
            
            <tr><td>
                <details open>
                    <summary>Variance</summary>
                    

                    <ul>
                        <li>SquaresSum: ${squaresSum}</li>
                    </ul>
                </details>       
            </td><td>: ${variance}</td></tr>

            <tr><td>StandardDeviation</td><td>: ${standardDeviation}</td></tr>
            <tr><td>SampleVariance</td><td>: ${sampleVariance}</td></tr>
            <tr><td>SampleStandardDeviation</td><td>: ${sampleStandardDeviation}</td></tr>
            <tr><td>StandardError</td><td>: ${standardError}</td></tr>

        </tbody>
    </table>
    `