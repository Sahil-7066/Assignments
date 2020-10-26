// var opt1 = document.getElementById("r1").value;
// var opt2 = document.getElementById("r2").value;

function Multiply() {
    //console.log("Inside Multiply")

    var opt1 = document.getElementById("r1").value;
    //console.log("opt1 : ", opt1);
    //var opt2 = document.getElementById("r2").value;

    if (opt1 == "a2D") {
        //console.log("Inside if loop")
        let m1 = [];
        let col1 = [];
        let m2 = [];
        let col2 = [];
        let ans = [];
        let anscol = [];
        for (let i = 1; i <= 2; i++) {
            for (let j = 1; j <= 2; j++) {
                let val = "a" + i + '' + j;
                let val2 = "b" + i + '' + j;
                let val3 = document.getElementById(val).value;
                //console.log("val3 : ", val3);
                let val4 = document.getElementById(val2).value;
                //console.log("val4 : ", val4);
                // if (val3 != " ") {
                //  col1.push(val3);
                // } else {
                //     window.alert("Please fill all inputs")
                // }
                col1.push(val3);
                col2.push(val4)
                // if (val4 != " ") {
                //     col2.push(val4)
                // } else {
                //     window.alert("Please fill all inputs")
                // }
            }
            m1.push(col1)
            m2.push(col2)
            col1 = [];
            col2 = [];
        }

        for (let i = 0; i <= 1; i++) {
            for (let j = 0; j <= 1; j++) {
                if (m1[i][j] == " " || m2[i][j] == " ") {
                    window.alert("Please check inputs");
                    return;
                }
                //break;
            }
            //break;
        }

        for (let i = 0; i <= 1; i++) {
            for (let j = 0; j <= 1; j++) {
                document.getElementById("al").innerHTML += m1[i][j] + " " + " " + " ";
                document.getElementById("bl").innerHTML += m2[i][j] + " " + " " + " ";
            }
            document.getElementById("al").innerHTML += "<br>";
            document.getElementById("bl").innerHTML += "<br>";
        }

        //console.log("m1 : ", m1)
        // if (opt2 == "b2D") {
        //     for (let i = 1; i <= 2; i++) {
        //         for (let j = 1; j <= 2; j++) {
        //             let val = "b" + i + '' + j;
        //             console.log("val : ", val);
        //             let val2 = document.getElementById(val).value;
        //             console.log("val2 : ", val2)
        //             col2.push(val2);
        //         }
        //         m2.push(col2)
        //         col2 = [];
        //     }
        //     for (let i = 0; i <= 1; i++) {
        //         for (let j = 0; j <= 1; j++) {
        //             document.getElementById("bl").innerHTML += m2[i][j] + " " + " ";
        //         }
        //         document.getElementById("bl").innerHTML += "<br>" + "<br>";
        //     }
        // }
        //console.log("m2 : ", m2);
        for (let i = 0; i <= 1; i++) {
            for (let j = 0; j <= 1; j++) {
                let val = 0;
                for (let k = 0; k <= 1; k++) {
                    val += m1[i][k] * m2[k][j];
                }
                anscol.push(val);
            }
            ans.push(anscol);
            anscol = [];
        }
        //console.log("ans : ", ans)

        for (let i = 0; i <= 1; i++) {
            for (let j = 0; j <= 1; j++) {
                document.getElementById("Ans").innerHTML += ans[i][j] + " " + " " + " ";
            }
            document.getElementById("Ans").innerHTML += "<br>";
        }
    }

    if (opt1 == "a3D") {
        //console.log("Inside if a3D loop")
        let m1 = [];
        let col1 = [];
        let m2 = [];
        let col2 = [];
        let ans = [];
        let anscol = [];

        for (let i = 1; i <= 3; i++) {
            for (let j = 1; j <= 3; j++) {
                let val = "a" + i + '' + j;
                let val2 = "b" + i + '' + j;
                let val3 = document.getElementById(val).value;
                //console.log("val3 : ", val3);
                let val4 = document.getElementById(val2).value;
                //console.log("val4 : ", val4);
                col1.push(val3);
                col2.push(val4)
            }
            m1.push(col1)
            m2.push(col2)
            col1 = [];
            col2 = [];
        }

        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                if (m1[i][j] == " " || m2[i][j] == " ") {
                    window.alert("Please check inputs");
                    return;
                }
                //break;
            }
            //break;
        }

        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                document.getElementById("al").innerHTML += m1[i][j] + " " + " " + " ";
                document.getElementById("bl").innerHTML += m2[i][j] + " " + " " + " ";
            }
            document.getElementById("al").innerHTML += "<br>";
            document.getElementById("bl").innerHTML += "<br>";
        }
        //console.log("m1 : ", m1)
        // if (opt2 == "b2D") {
        //     for (let i = 1; i <= 2; i++) {
        //         for (let j = 1; j <= 2; j++) {
        //             let val = "b" + i + '' + j;
        //             console.log("val : ", val);
        //             let val2 = document.getElementById(val).value;
        //             console.log("val2 : ", val2)
        //             col2.push(val2);
        //         }
        //         m2.push(col2)
        //         col2 = [];
        //     }
        //     for (let i = 0; i <= 1; i++) {
        //         for (let j = 0; j <= 1; j++) {
        //             document.getElementById("bl").innerHTML += m2[i][j] + " " + " ";
        //         }
        //         document.getElementById("bl").innerHTML += "<br>" + "<br>";
        //     }
        // }
        //console.log("m2 : ", m2);
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                let val = 0;
                for (let k = 0; k <= 2; k++) {
                    val += m1[i][k] * m2[k][j];
                }
                anscol.push(val);
            }
            ans.push(anscol);
            anscol = [];
        }
        //console.log("ans : ", ans)

        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                document.getElementById("Ans").innerHTML += ans[i][j] + " " + " " + " ";
            }
            document.getElementById("Ans").innerHTML += "<br>";
        }
    }

    if (opt1 == "a4D") {
        //console.log("Inside if a3D loop")
        let m1 = [];
        let col1 = [];
        let m2 = [];
        let col2 = [];
        let ans = [];
        let anscol = [];

        for (let i = 1; i <= 4; i++) {
            for (let j = 1; j <= 4; j++) {
                let val = "a" + i + '' + j;
                let val2 = "b" + i + '' + j;
                let val3 = document.getElementById(val).value;
                // console.log("val3 : ", val3);
                let val4 = document.getElementById(val2).value;
                //console.log("val4 : ", val4);
                col1.push(val3);
                col2.push(val4)
            }
            m1.push(col1)
            m2.push(col2)
            col1 = [];
            col2 = [];
        }

        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <= 3; j++) {
                if (m1[i][j] == " " || m2[i][j] == " ") {
                    window.alert("Please check inputs");
                    return;
                }
                //break;
            }
            //break;
        }

        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <= 3; j++) {
                document.getElementById("al").innerHTML += m1[i][j] + " " + " " + " ";
                document.getElementById("bl").innerHTML += m2[i][j] + " " + " " + " ";
            };
            document.getElementById("al").innerHTML += "<br>";
            document.getElementById("bl").innerHTML += "<br>";
        }
        //console.log("m1 : ", m1)
        // if (opt2 == "b2D") {
        //     for (let i = 1; i <= 2; i++) {
        //         for (let j = 1; j <= 2; j++) {
        //             let val = "b" + i + '' + j;
        //             console.log("val : ", val);
        //             let val2 = document.getElementById(val).value;
        //             console.log("val2 : ", val2)
        //             col2.push(val2);
        //         }
        //         m2.push(col2)
        //         col2 = [];
        //     }
        //     for (let i = 0; i <= 1; i++) {
        //         for (let j = 0; j <= 1; j++) {
        //             document.getElementById("bl").innerHTML += m2[i][j] + " " + " ";
        //         }
        //         document.getElementById("bl").innerHTML += "<br>" + "<br>";
        //     }
        // }
        //console.log("m2 : ", m2);
        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <= 3; j++) {
                let val = 0;
                for (let k = 0; k <= 2; k++) {
                    val += m1[i][k] * m2[k][j];
                }
                anscol.push(val);
            }
            ans.push(anscol);
            anscol = [];
        }
        //console.log("ans : ", ans)

        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <= 3; j++) {
                document.getElementById("Ans").innerHTML += ans[i][j] + " " + " " + " ";
            }
            document.getElementById("Ans").innerHTML += "<br>";
        }
    }
}