import React from "react";
// import avatar from "../../assets/images/woman-avatar-small.jpg";
//
// $(document).ready(function () {
//   var readURL = function (input) {
//     if (input.files && input.files[0]) {
//       var reader = new FileReader();
//
//       reader.onload = function (e) {
//         $(".profile-pic").attr("src", e.target.result);
//       };
//
//       reader.readAsDataURL(input.files[0]);
//     }
//   };
//
//   $(".file-upload").on("change", function () {
//     readURL(this);
//   });
//
//   $(".upload-button").on("click", function () {
//     $(".file-upload").click();
//   });
// });

const Avatar = () => {
  return (
    <div className="avatar-wrapper">
      <img className="profile-pic" src="" />
      <div className="upload-button">
        <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
      </div>
      <input className="file-upload" type="file" accept="image/*" />
    </div>
  );
};

export default Avatar;
