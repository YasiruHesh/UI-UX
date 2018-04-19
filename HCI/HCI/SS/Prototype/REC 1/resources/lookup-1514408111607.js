(function(window, undefined) {
  var dictionary = {
    "7ca85c79-660d-4624-a573-0ea8e8387c1f": "Notification",
    "4ab3abc8-7027-4a79-8b94-c0c735d5fc63": "Sign Up",
    "662a0c06-672c-4ff8-9380-d9b891a8431b": "RESET PASS",
    "ebec5a52-f43c-4289-a863-5a4502e4d4aa": "User Info",
    "3f13d102-12ec-4d3e-8831-1e78f0e217c9": "Swimming Pool",
    "4f825eb8-7dab-4bf1-afeb-01ea1acc696a": "Fogot Password",
    "2e661a29-d667-4eb6-a983-e6b9b4c07660": "PAYMENT METHOD",
    "bb4c1694-7710-45db-913c-a6e6e82d7ebc": "User Profile",
    "0964d79e-a3e5-487f-ba24-e9fa84cbe145": "Gymnasium",
    "87ee212f-3c69-42e3-8f3b-5580d32fbd4b": "Email",
    "5abc6392-2924-4114-9125-76da94c291ff": "Outdoor Games",
    "ebf418fc-b225-4f0d-9cb2-722504247002": "Invite Friends",
    "d49ba875-3a8d-487f-8f67-908a423c5892": "Indoor Games",
    "49392516-ad83-4471-81e1-44a57b20d8bd": "Settings",
    "923cf27f-8dc3-4760-bde3-7718d668fd67": "Desktop",
    "3c3b8df5-9536-4903-9821-8cb365211c65": "Pass Reset Sucs",
    "3034f491-9323-47e9-ac76-e5a70c072766": "Optinal Pages",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Sign In",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "b120c4bc-2097-4865-870e-3e4b17a7316c": "REC",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);