// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
  $('#unfollow-btn').hover(
    function() {
      $(this).removeClass('btn-primary');
      $(this).addClass('btn-danger');
      $(this).html('Unfollow');
    },
    function() {
      $(this).html('Following');
      $(this).removeClass('btn-danger');
      $(this).addClass('btn-primary');
    }
  );
});
