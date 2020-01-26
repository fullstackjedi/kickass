<div class="modal-content">
  <div class="modal-header">
    <h4 class="modal-title w-100" id="myModalLabel">Add a Product</h4>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <slot />
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">
      Close
    </button>
    <button type="button" class="btn btn-primary btn-sm">Save changes</button>
  </div>
</div>
