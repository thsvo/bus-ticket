const allBtn = document.getElementsByClassName("grid grid-cols-2 gap-3");
let count = 0;
let seatcount = 40;
let selectedSeats = [];
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    const name = e.target.innerText;
    e.target.style.backgroundColor = "#1DD100";
    // console.log(name);
    if (!selectedSeats.includes(name) && selectedSeats.length < 4) {
      const selectedContainer = document.getElementById("select-seat");
      const div = document.createElement("div");
      div.className = "pl-9 gap-16 grid grid-cols-3";
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      p1.innerText = name;
      p2.innerText = "Economoy";
      p3.innerText = "550";
      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);
      selectedContainer.appendChild(div);
      count = count + 1;
      seatcount = seatcount - 1;
      document.getElementById("sLeft").innerText = seatcount;
      document.getElementById("selected-seat").innerText = count;
      updateTotalCost(550);
      updateGrandTotal();
      selectedSeats.push(name);
      updateCountsAndTotal();
    } else {
      alert(
        "Can not select 1 seat more than 1 and can no select more than 4 seats"
      );
    }
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function updateTotalCost(value) {
  const totalCost = getConvertedValue("total-price");
  const sum = totalCost + parseInt(value);
  document.getElementById("total-price").innerText = sum;
}

function updateGrandTotal(status) {
  const totalCost = getConvertedValue("total-price");
  if (status === undefined) {
    document.getElementById("grand-price").innerText = totalCost;
  } else {
    const couponCode = document.getElementById("coupon-code").value;
    if (couponCode === "NEW15") {
      const discountprice = totalCost * 0.15;
      sum = totalCost - discountprice;
      document.getElementById("grand-price").innerText = parseInt(sum);
      document.getElementById("hiddeninput").className = "hidden";
    } else if (couponCode === "Couple 20") {
      const discountprice = totalCost * 0.2;
      sum = totalCost - discountprice;
      document.getElementById("grand-price").innerText = parseInt(sum);
    } else {
      alert("Invalid coupon code");
    }
  }
}
function getConvertedValue(id) {
  const price = document.getElementById(id).innerText;
  const convertPrice = parseInt(price);
  return convertPrice;
}

function updateCountsAndTotal() {
  const seatcount = selectedSeats.length;
  document.getElementById("selected-seat").innerText = seatcount;
  updateGrandTotal();
}

function allpagehide(status) {
  if (status === undefined) {
    confirm("Are you sure you want to leave?");
  } else {
    document.getElementById("allpagehide").className = "hidden";
    document.getElementById("showsuccesspage").classList.remove('hidden');
  }
}

function scrollToSelectSeat() {
  var selectSeatSection = document.getElementById("select-seat-section");

  selectSeatSection.scrollIntoView({ behavior: "smooth" });
}
