/* 

*/
const data=document.getElementById("div-data")
const consoleData=document.getElementById("div-data-consoleData")




function toDataArray(text){

    const dataArray = text
      .trim()                       // 앞뒤 불필요한 공백 제거
      .split(/\r?\n/)               // 줄바꿈으로 나누기
      .map(item => item.trim())     // 각 항목 양옆 공백 제거
      .filter(item => item !== ""); // 빈 줄이 있다면 배열에서 제외
    console.log(dataArray);
    return dataArray
}


function getAverage(dataArray){

    // 1. ⚠️ 방어 코드: 데이터가 없으면 0을 반환 (나누기 0 에러 방지)
    if (!dataArray || dataArray.length === 0) {
        return 0;
    }


    const totalSum = dataArray.reduce((acc, cur) => {
        return acc + Number(cur);
    }, 0);
    return totalSum / dataArray.length;
}


function getVariance(dataArray, average){

    const varianceSum = dataArray.reduce((acc, cur) => {
        return acc + (Number(cur)-Number(average))**2;
    }, 0);
    return varianceSum/dataArray.length;

}
function getStandardDeviation(variance){
    return Math.sqrt(variance);
}



function getSampleVariance(dataArray, average){

    if (dataArray.length === 1) return `❌`;

    const varianceSum = dataArray.reduce((acc, cur) => {
        return acc + (Number(cur)-Number(average))**2;
    }, 0);
    return varianceSum/(dataArray.length-1);
}
function getSampleStandardDeviation(dataArray, sampleVariance){
    if (dataArray.length === 1) return `❌`;
    return Math.sqrt(sampleVariance);
}


function getStandardError(dataArray, sampleStandardDeviation){
    if (dataArray.length === 1) return `❌`;
    return sampleStandardDeviation/Math.sqrt(dataArray.length);
}


data.addEventListener("input", (e)=>{
    const text=e.target.innerText
    const dataArray=toDataArray(text);

    const average=getAverage(dataArray)
    const variance=getVariance(dataArray, average)
    const standardDeviation=getStandardDeviation(variance)
    const sampleVariance=getSampleVariance(dataArray, average)
    const sampleStandardDeviation=getSampleStandardDeviation(dataArray, sampleVariance)
    const standardError=getStandardError(dataArray, sampleStandardDeviation)

    consoleData.innerHTML=`
    <table>
        <tbody>
            <tr><td>Average</td><td>: ${average}</td></tr>
            <tr><td>Variance</td><td>: ${variance}</td></tr>
            <tr><td>StandardDeviation</td><td>: ${standardDeviation}</td></tr>
            <tr><td>SampleVariance</td><td>: ${sampleVariance}</td></tr>
            <tr><td>SampleStandardDeviation</td><td>: ${sampleStandardDeviation}</td></tr>
            <tr><td>StandardError</td><td>: ${standardError}</td></tr>

        </tbody>
    </table>
    `
    ;
} )