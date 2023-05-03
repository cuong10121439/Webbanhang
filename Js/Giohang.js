//Cài đặt mặc đinh
document.getElementById("showcart").style.display="none";
var giohang = new Array();
function themvaogiohang(x){
    var sanpham = x.parentElement.children;
    var hinh = sanpham[0].children[0].src;
    var gia = sanpham[1].children[0].innerText;
    var tensp = sanpham[2].innerText;
    var soluong = parseInt(sanpham[3].value);
    var sp = new Array(hinh, gia, tensp, soluong);

    //kiểm tra
    var kt=0;
    for (let i=0; i<giohang.length;i++ ){
        if(giohang[i][2]==tensp){
            kt=1;
            soluong+=parseInt(giohang[i][3]);
            giohang[i][3]=soluong;
            break;
        }
    }
    if(kt == 0){
        giohang.push(sp);
    }

    

    console.log(giohang);
    showcountsp();
    //lưu giỏ hàng sisionStore
    sessionStorage.setItem("giohang",JSON.stringify(giohang));


}
function showcountsp(){
    document.getElementById("countsp").innerHTML=giohang.length;
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var count = giohang.length;
    var spcount = document.getElementById("spcount");
    if (spcount) {
        spcount.innerHTML = count;
}
}
function showmycart(){
    var ttgh = "";
    var tong = 0;
    for(let i=0; i<giohang.length;i++){
        var tt = parseInt(giohang[i][1 ]) * parseInt(giohang[i][3])
        tong += tt;
        ttgh +='<tr>'+
                    '<td> '+ (i+1) + '</td>'+
                    '<td><img style=" width=60%; " src="'+ giohang[i][0] +'" alt=""></td>'+
                    '<td>'+ giohang[i][2] +'</td>'+
                    '<td>'+ giohang[i][1] +'</td>'+
                    '<td>'+ giohang[i][3] +'</td>'+
                    '<td>'+
                        '<div>'+ tt +'</div>'+
                    '</td>'+
                    '<td>'+
                        '<button onclick="xoasp(this)"> Xóa</button>'+
                    '</td>'+
                '</tr>';

    }
    ttgh+=' <tr>'+
                    '<th colspan="5">Tổng đơn hàng</th>'+
                    '<th>'+
                        '<div>'+ tong +'</div>'+
                    '</th>'+
                '</tr>'; 
    document.getElementById("mycart").innerHTML=ttgh;                   
               
}
function xoasp(x){
    //xóa tr
    var tr=x.parentElement.parentElement;
    var tensp=tr.children[2].innerText;
    tr.remove();
    //xóa sản phẩm trong mảng
    for (let i=0; i< giohang.length; i++) {
        if(giohang[i][2]==tensp){
            giohang.splice(i,1);
        }
    }
    //console.log(giohang);
    showmycart();
}

function showcart (){
    var x = document.getElementById("showcart");
    if(x.style.display=="block"){
        x.style.display="none";

    }
    else{
        x.style.display="block";
    }
    showmycart();
}
function xoatatca(){
    giohang =[];
    showmycart();
}
function showgiohang_thanhtoan() {
    var gh = sessionStorage.getItem("giohang");
    if (!gh) {
      console.log("Không có giỏ hàng được lưu trữ trong sessionStorage");
      return;
    }
    var giohang = JSON.parse(gh);
    var ttgh = "";
    var tong = 0;
    for (let i = 0; i < giohang.length; i++) {
      var tt = parseInt(giohang[i][1]) * parseInt(giohang[i][3]);
      tong += tt;
      ttgh +=
        '<tr>' +
        '<td> ' +
        (i + 1) +
        '</td>' +
        '<td><img style="width:60%;" src="' +
        giohang[i][0] +
        '" alt=""></td>' +
        '<td>' +
        giohang[i][2] +
        '</td>' +
        '<td>' +
        giohang[i][1] +
        '</td>' +
        '<td>' +
        giohang[i][3] +
        '</td>' +
        '<td>' +
        '<div>' +
        tt +
        '</div>' +
        '</td>' +
        '</tr>';
    }
    ttgh +=
      ' <tr>' +
      '<th colspan="5">Tổng đơn hàng</th>' +
      '<th>' +
      '<div>' +
      tong +
      '</div>' +
      '</th>' +
      '</tr>';
    document.getElementById("mycart").innerHTML = ttgh;
  }
  showgiohang_thanhtoan();