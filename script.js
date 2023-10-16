const calculateNumDays = (startDate, endDate, datesExcluded) => {
    let numDays = 0;
    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
        const dateStr = formatDate(date);
        if (!datesExcluded.includes(dateStr)) {
            numDays++;
        }
    }
    return numDays;
}

const calculateDDR = () => {
   
const startDate = new Date(document.getElementById("startDate").value);
const endDate = new Date(document.getElementById("endDate").value);
const datesExcluded = document.getElementById("datesExcluded").value.split(',');
const leadCount = parseFloat(document.getElementById("leadCount").value);

const idn = Math.floor((Math.random() * 10) + 1);
const kstartDate = new Date(startDate);
const kendDate = new Date(endDate);
const monthYear =`${startDate.toLocaleString('default', { month: 'long' })}, ${kstartDate.getFullYear()}`;
   
    document.getElementById("idnum").textContent = idn;
    document.getElementById("monthYear").textContent = monthYear;

    const timeDiff = kendDate - kstartDate;
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
   
    document.getElementById("numDays").textContent = daysDiff;

    

    
    const expectedDRR = daysDiff > 0 ? (leadCount / daysDiff).toFixed(2) : "N/A";
    document.getElementById("expectedDRR").textContent = expectedDRR;

    document.getElementById("lastUpdate").textContent = new Date().toLocaleString()
}





const addDRR = () => {

    
    let num = numDays.textContent;
    console.log(num)

    if(num === ""){
        alert("First Calculate then Add ");
    }else{

    const t = document.createElement("tr");
    t.innerHTML = "";
    task.appendChild(t)

    const tr1 = document.createElement("td");
    tr1.innerHTML = "N/A"
    task.appendChild(tr1);

    const tr2 = document.createElement("td");
    tr2.innerHTML = idnum.textContent;
    task.appendChild(tr2);

    const tr3 = document.createElement("td");
    tr3.innerHTML = startDate.value;
    task.appendChild(tr3);

    const tr4 = document.createElement("td");
    tr4.innerHTML = endDate.value;
    task.appendChild(tr4);

    const tr5 = document.createElement("td");
    tr5.innerHTML = monthYear.textContent;
    task.appendChild(tr5);

    const tr6 = document.createElement("td");
    tr6.innerHTML = datesExcluded.value;
    task.appendChild(tr6);

    const tr7 = document.createElement("td");
    tr7.innerHTML = numDays.textContent;
    task.appendChild(tr7);

    const tr8 = document.createElement("td");
    tr8.innerHTML = leadCount.value;
    task.appendChild(tr8);

    const tr9 = document.createElement("td");
    tr9.innerHTML = expectedDRR.textContent;
    task.appendChild(tr9);

    const tr10 = document.createElement("td");
    tr10.innerHTML = lastUpdate.textContent;
    task.appendChild(tr10);

    }


}