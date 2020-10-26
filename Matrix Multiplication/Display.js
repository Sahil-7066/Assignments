function Display(a) {
    //console.log("a : ", a);
    if (a === "a2D") {
        for (let i = 1; i <= 4; i++) {
            for (let j = 1; j <= 4; j++) {
                let m = "a" + i + '' + j;
                let n = "b" + i + '' + j;
                //console.log("m : ", m);
                if (m == "a11" || m == "a12" || m == "a21" || m == "a22" || n == "b11" || n == "b12" || n == "b21" || n == "b22") {
                    //console.log("m : ", m);
                    document.getElementById(m).style.display = "block";
                    document.getElementById(m).value = " ";
                    document.getElementById(n).style.display = "block";
                    document.getElementById(n).value = " ";

                } else {
                    // console.log("m : ", m);
                    document.getElementById(m).style.display = "none";
                    document.getElementById(m).value = " ";
                    document.getElementById(n).style.display = "none";
                    document.getElementById(n).value = " ";
                }
            }
        }
        document.getElementById("al").innerHTML = " ";
        document.getElementById("bl").innerHTML = " ";
        document.getElementById("Ans").innerHTML = " ";
    }

    // if (a === "b2D") {
    //     for (let i = 1; i <= 4; i++) {
    //         for (let j = 1; j <= 4; j++) {
    //             let m = "b" + i + '' + j;
    //             console.log("m : ", m);
    //             if (m == "b11" || m == "b12" || m == "b21" || m == "b22") {
    //                 console.log("m : ", m);
    //                 document.getElementById(m).style.display = "block";
    //             } else {
    //                 console.log("m : ", m);
    //                 document.getElementById(m).style.display = "none";
    //             }
    //         }
    //     }
    // }

    if (a === "a3D") {
        for (let i = 1; i <= 4; i++) {
            for (let j = 1; j <= 4; j++) {
                let m = "a" + i + '' + j;
                let n = "b" + i + '' + j;
                //console.log("m : ", m);
                if (m == "a11" || m == "a12" || m == "a13" || m == "a21" || m == "a22" || m == "a23" || m == "a31" || m == "a32" || m == "a33" || n == "b11" || n == "b12" || n == "b13" || n == "b21" || n == "b22" || n == "b23" || n == "b31" || n == "b32" || n == "b33") {
                    //console.log("m : ", m);
                    document.getElementById(m).style.display = "block";
                    document.getElementById(m).value = " ";
                    document.getElementById(n).style.display = "block";
                    document.getElementById(n).value = " ";
                } else {
                    //console.log("m : ", m);
                    document.getElementById(m).style.display = "none";
                    document.getElementById(m).value = " ";
                    document.getElementById(n).style.display = "none";
                    document.getElementById(n).value = " ";

                }
            }
        }
        document.getElementById("al").innerHTML = " ";
        document.getElementById("bl").innerHTML = " ";
        document.getElementById("Ans").innerHTML = " ";
    }

    // if (a === "b3D") {
    //     for (let i = 1; i <= 4; i++) {
    //         for (let j = 1; j <= 4; j++) {
    //             let m = "b" + i + '' + j;
    //             console.log("m : ", m);
    //             if (m == "b11" || m == "b12" || m == "b13" || m == "b21" || m == "b22" || m == "b23" || m == "b31" || m == "b32" || m == "b33") {
    //                 console.log("m : ", m);
    //                 document.getElementById(m).style.display = "block";
    //             } else {
    //                 console.log("m : ", m);
    //                 document.getElementById(m).style.display = "none";
    //             }
    //         }
    //     }
    // }

    if (a === "a4D") {
        for (let i = 1; i <= 4; i++) {
            for (let j = 1; j <= 4; j++) {
                let m = "a" + i + '' + j;
                let n = "b" + i + '' + j;
                //console.log("m : ", m);
                if (m == "a11" || m == "a12" || m == "a13" || m == "a14" || m == "a21" || m == "a22" || m == "a23" || m == "a24" || m == "a31" || m == "a32" || m == "a33" || m == "a34" || m == "a41" || m == "a42" || m == "a43" || m == "a44" || n == "b11" || n == "b12" || n == "b13" || n == "b14" || n == "b21" || n == "b22" || n == "b23" || n == "b24" || n == "b31" || n == "b32" || n == "b33" || n == "b34" || m == "b41" || m == "b42" || m == "b43" || m == "b44") {
                    //console.log("m : ", m);
                    document.getElementById(m).style.display = "block";
                    document.getElementById(m).value = " ";
                    document.getElementById(n).style.display = "block";
                    document.getElementById(n).value = " ";
                } else {
                    //console.log("m : ", m);
                    document.getElementById(m).style.display = "none";
                    document.getElementById(n).style.display = "none";
                    document.getElementById(m).value = " ";
                    document.getElementById(n).value = " ";
                }
            }
        }
        document.getElementById("al").innerHTML = " ";
        document.getElementById("bl").innerHTML = " ";
        document.getElementById("Ans").innerHTML = " ";
    }

    // if (a === "b4D") {
    //     for (let i = 1; i <= 4; i++) {
    //         for (let j = 1; j <= 4; j++) {
    //             let m = "b" + i + '' + j;
    //             console.log("m : ", m);
    //             if (m == "b11" || m == "b12" || m == "b13" || m == "b14" || m == "b21" || m == "b22" || m == "b23" || m == "b24" || m == "b31" || m == "b32" || m == "b33" || m == "b34" || m == "b41" || m == "b42" || m == "b43" || m == "b44") {
    //                 console.log("m : ", m);
    //                 document.getElementById(m).style.display = "block";
    //             } else {
    //                 console.log("m : ", m);
    //                 document.getElementById(m).style.display = "none";
    //             }
    //         }
    //     }
    // }

}

function Clear() {

    var a = document.getElementById("r1").value;

    if (a == "a2D") {
        for (let i = 1; i <= 2; i++) {
            for (let j = 1; j <= 2; j++) {
                let m = "a" + i + '' + j;
                let n = "b" + i + '' + j;
                //document.getElementById(m).style.display = "none";
                document.getElementById(m).value = " ";
                document.getElementById(n).value = " ";
            }
        }
        document.getElementById("al").innerHTML = " ";
        document.getElementById("bl").innerHTML = " ";
        document.getElementById("Ans").innerHTML = " ";

    }

    if (a == "a3D") {
        for (let i = 1; i <= 3; i++) {
            for (let j = 1; j <= 3; j++) {
                let m = "a" + i + '' + j;
                let n = "b" + i + '' + j;
                //document.getElementById(m).style.display = "none";
                document.getElementById(m).value = " ";
                document.getElementById(n).value = " ";
            }
        }
        document.getElementById("al").innerHTML = " ";
        document.getElementById("bl").innerHTML = " ";
        document.getElementById("Ans").innerHTML = " ";
    }

    if (a == "a4D") {
        for (let i = 1; i <= 4; i++) {
            for (let j = 1; j <= 4; j++) {
                let m = "a" + i + '' + j;
                let n = "b" + i + '' + j;
                //document.getElementById(m).style.display = "none";
                document.getElementById(m).value = " ";
                document.getElementById(n).value = " ";
            }
        }
        document.getElementById("al").innerHTML = " ";
        document.getElementById("bl").innerHTML = " ";
        document.getElementById("Ans").innerHTML = " ";
    }
}

// function Reset() {
//     window.location.reload();
//     // for (let i = 1; i <= 4; i++) {
//     //     for (let j = 1; j <= 4; j++) {
//     //         let m = "a" + i + '' + j;
//     //         let n = "b" + i + '' + j;
//     //         document.getElementById(m).style.display = "none";
//     //         document.getElementById(n).style.display = "none";
//     //     }
//     // }
// }

function Validate(a) {
    //console.log("Inside Validate")
    let id = a.id;
    //console.log("id : ", id);
    let v = a.value;
    //console.log("v : ", v);
    if (isNaN(v)) {
        window.alert("Invalid Input");
        document.getElementById(id).value = " ";
    }
}