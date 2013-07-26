# jquery-formtk

A jQuery plugin providing several easy to use methods for working with Form data. The toolkit handles the transfer of data **to** and **from** a Form, so you can concentrate on more important tasks.

### Requirements

  * jQuery 1.10 and higher

### Download

  * [jquery-formtk-0.8.0.min.js](dist/jquery-formtk-0.8.0.min.js)

### Setup

```html
  <script src="jquery.js"></script>
  <script src="jquery-formtk-0.8.0.min.js"></script>
```

### Usage Summary

#### `API: .formtk("select_list", options)`

Use to populate a target `SELECT` tag with a given array of key-value pairs. For example,

```html
  ...
  <select id="mylist"></select>
  ...
```
```javaScript
  $("#mylist").formtk("select_list", {
    data: [
      {name:'Beer',   id:1},
      {name:'Coffee', id:2},
      {name:'Pop',    id:3}
    ]
  });
```

#### `API: .formtk("deserialize", options)`

Use to populate Form field entries with a given data Object. For example,

```html
  <form id="myform">
    <input type="text" name="name" />
    <input type="text" name="description" />
  </form>
```
```javaScript
  $("#myform").formtk("deserialize", {
    data: {
      name: 'jQuery'
      description: 'Fun with JavaScript',
    }
  });
```

#### `API: .formtk("serialize", options)`

Use to obtain a data Object from Form field entries. For example,

```javaScript
  var data = $("#myform").formtk("serialize");
  // do something with data
```

Consult the [wiki](https://github.com/fun-ruby/jquery-formtk/wiki) pages for more detailed API documentation and examples.


## License

Copyright (c) 2013 Long On, released under the MIT license

