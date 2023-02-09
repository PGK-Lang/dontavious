<script>
    let v1 = "e";
    let v2 = "s";
    let v3 = "t";
    let v4 = "j";
    let v5 = "p";
    let result;
  
    function updateResult() {
      result = v1 + v2 + v3 + v4 + v5;
    }
  
    function handleOptionClick(event) {
      const target = event.target;
      const name = target.getAttribute("data-toggle");
      const value = target.getAttribute("data-title");
  
      switch (name) {
        case "v1":
          v1 = value;
          break;
        case "v2":
          v2 = value;
          break;
        case "v3":
          v3 = value;
          break;
        case "v4":
          v4 = value;
          break;
        case "v5":
          v5 = value;
          break;
        default:
          break;
      }
  
      updateResult();
    }
  </script>
  
  <header>
    <h1 id="title">Quick Personality Test</h1>
    <p id="description">
      What type of personality do you have? This quick scientific personality test will help you discover your primary personality traits. Your personality is important because it determines how you interact with your environment and the people around you. Understanding your personality can help you be better and happier in your life =)
    </p>
  </header>
  
  <form class="container">
    <div class="questions">
      <p><strong>Please choose one option</strong></p>
      <p><strong>Do you... ? Are you... ?</strong></p>
      <hr />
  
      <div class="form-group">
        <div class="row input-group">
          <label for="v1" class="col-1 control-label text-right">1</label>
          <div id="radioBtn" class="btn-group flex-wrap">
            <a
              class="col-xs-auto btn btn-secondary btn-sm active"
              data-toggle="v1"
              data-title="e"
              on:click={handleOptionClick}
            >
              Expend energy, enjoy groups
            </a>
            <a
              class="col-xs-auto btn btn-secondary btn-sm notActive"
              data-toggle=""
  