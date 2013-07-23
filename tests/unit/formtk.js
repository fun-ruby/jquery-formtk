test("test select_list",
  function() {
    var a = $("#favbev").children();
    equal(0, a.length, "Passed!");

    $("#favbev").formtk("select_list", {
       data: [
        {name:'Beer', id:1},
        {name:'Coffee', id:2}
       ],
       option_name: 'name',
       option_value: 'id',
       append: false
    });
    a = $("#favbev").children();
    equal(2, a.length, "Passed!");

    $("#favbev").formtk("select_list", {
       data: [
        {name:'Pop', id:3},
        {name:'Juice', id:4},
        {name:'Water', id:5}
       ],
       append: true
    });
    a = $("#favbev").children();
    equal(5, a.length, "Passed!");

    $("#favbev").val([3, 5]);
    a = $("#favbev").val();
    equal("3", a[0], "Passed!");
    equal("5", a[1], "Passed!");

    $("#favbev").val([]);
    a = $("#favbev").val();
    equal(null, a, "Passed!");

    $("#favbev").formtk("select_list", {
       data: [
        {name:'Beer', id:1},
        {name:'Coffee', id:2}
       ],
       option_value: 'name'
    });
    a = $("#favbev").children();
    equal(2, a.length, "Passed!");

    $("#favbev").val("Coffee");
    a = $("#favbev").val();
    equal("Coffee", a[0], "Passed!");

    $("#favbev").formtk("select_list", {
       data: []
    });
    a = $("#favbev").children();
    equal(0, a.length, "Passed!");
  });

test("test deserialize",
  function() {

    $("#favbev").formtk("select_list", {
       data: [
        {name:'Beer', id:1},
        {name:'Coffee', id:2},
        {name:'Pop', id:3},
        {name:'Juice', id:4},
        {name:'Water', id:5}
       ]
    });
    var a = $("#favbev").children();
    equal(5, a.length, "Passed!");

    equal("", $("#firstName").val(), "Passed!");
    equal("", $("#lastName").val(), "Passed!");
    equal("", $("#codeName").val(), "Passed!");
    equal(false, $("#genderM").prop("checked"), "Passed!");
    equal(false, $("#genderF").prop("checked"), "Passed!");
    equal(false, $("#gadCell").prop("checked"), "Passed!");
    equal(false, $("#gadLapt").prop("checked"), "Passed!");
    equal(false, $("#gadBeep").prop("checked"), "Passed!");
    equal(false, $("#gadMp3").prop("checked"), "Passed!");
    equal(null, $("#favbev").val(), "Passed!");
    equal("", $("#feedbak").val(), "Passed!");

    var data = {
      "name": ["Joe", "Ruby", "Ninjaa"],
      "sex": "male",
      "gadgets": ["Laptop", "Cellphone"],
      "comment": "Where are all the iGadgets? Gotta have iGadgets.",
      "favbev": [3, 1]
    }

    $("#surveyform").formtk("deserialize", {data: data});

    equal("Joe", $("#firstName").val(), "Passed!");
    equal("Ruby", $("#lastName").val(), "Passed!");
    equal("Ninjaa", $("#codeName").val(), "Passed!");
    equal(true, $("#genderM").prop("checked"), "Passed!");
    equal(false, $("#genderF").prop("checked"), "Passed!");
    equal(true, $("#gadCell").prop("checked"), "Passed!");
    equal(true, $("#gadLapt").prop("checked"), "Passed!");
    equal(false, $("#gadBeep").prop("checked"), "Passed!");
    equal(false, $("#gadMp3").prop("checked"), "Passed!");
    a = $("#favbev").val();
    equal("1", a[0], "Passed!");
    equal("3", a[1], "Passed!");
    equal("Where are all the iGadgets? Gotta have iGadgets.", $("#feedbak").val(), "Passed!");

    $("#surveyform").formtk("deserialize", {data: {}});

  });

test("test serialize undefined form",
  function() {
    var actual = $("#abc").formtk("serialize");
    equal( JSON.stringify(actual), JSON.stringify({}) , "Passed!" );
  });


test("test serialize",
  function() {

    $("#favbev").formtk("select_list", {
       data: [
        {name:'Beer', id:1},
        {name:'Coffee', id:2},
        {name:'Pop', id:3},
        {name:'Juice', id:4},
        {name:'Water', id:5}
       ]
    });

    var data = {
      "name": ["Joe", "Ruby", "Ninjaa"],
      "sex": "male",
      "gadgets": ["Cellphone", "Laptop"],
      "favbev": ["1", "3"],
      "comment": "Where are all the iGadgets? Gotta have iGadgets."
    }

    $("#surveyform").formtk("deserialize", {data: data});

    var formData = $("#surveyform").formtk("serialize");

    var a = formData.name;
    equal(3, a.length, "Passed!");
    equal("Joe", a[0], "Passed!");
    equal("Ruby", a[1], "Passed!");
    equal("Ninjaa", a[2], "Passed!");

    equal("male", formData.sex, "Passed!");

    a = formData.gadgets;
    equal(2, a.length, "Passed!");
    equal("Cellphone", a[0], "Passed!");
    equal("Laptop", a[1], "Passed!");

    a = formData.favbev;
    equal(2, a.length, "Passed!");
    equal("1", a[0], "Passed!");
    equal("3", a[1], "Passed!");

    equal("Where are all the iGadgets? Gotta have iGadgets.", formData.comment, "Passed!");

    formData = $("#surveyform").formtk("serialize", {as_json: true});
    equal( JSON.stringify(data), formData, "Passed!");

    $("#surveyform").formtk("deserialize", {data: {}});
  });

