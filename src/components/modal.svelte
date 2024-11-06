<script lang="js">
let body = "This is a simple body";
let title = "Modal Title Can Changed";
let color = "blue";

const inputHandle = (e) => {
    title = e.target.value;
    console.log("Title changed to:", title);
};

const changeColor = () => {
    color = color === "blue" ? "red" : "blue";
    console.log("Color changed to new:", color);
};

</script>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" style="color:{color}" id="exampleModalLabel">{title}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            {body}
          <input type="text" on:input={inputHandle}/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" on:click={changeColor}>Color</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>