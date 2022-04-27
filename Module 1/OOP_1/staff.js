let staff_1 = {
    id: 10,
    fullname: "Khoa Nguyễn",
    gender: true,
    email: "khoa.nguyen@codegym.vn",
    hobbies: ["Đá banh", "Cầu lông", "Cà khịa"]
}
let staff_2 = {
    id: 5,
    fullname: "Trí Lê",
    gender: true,
    email: "tri.le@codegym.vn",
    hobbies: ["Phim Nhật", "Châu âu"]
}
let staff_3 = {
    id: 3,
    fullname: "Trí Đào",
    gender: true,
    email: "tri.dao@codegym.vn",
    hobbies: ["Châu á", "Nhảy dây"]
}

let staffs = [staff_1, staff_2, staff_3]

var directionByName = "asc"

function redernStaff() {
    let htmls = staffs.map(function (staff) {
        return `
            <tr>
                <td>${staff.id}</td>
                <td>${staff.fullname}</td>
                <td>${staff.email}</td>
                <td>${staff.gender ? "Male" : "Female"}</td>
                <td>${staff.hobbies.join("<br>")}</td>
            </tr>
        `
    })
    document.querySelector("#tbStaff>tbody").innerHTML = htmls.join("");
}

function sortByName() {
    if (directionByName == 'asc') {
        staffs.sort(function (stf1, stf2) {
            if (stf1.fullname > stf2.fullname) {
                return 1;
            }
            if (stf1.fullname < stf2.fullname) {
                return -1;
            }
            return 0;
        })
        directionByName = "desc"
    }
    else {
        staffs.sort(function (stf1, stf2) {
            if (stf2.fullname > stf1.fullname) {
                return 1;
            }
            if (stf2.fullname < stf1.fullname) {
                return -1;
            }
            return 0;
        })
        directionByName = "asc"
    }
    redernStaff();
}
redernStaff();