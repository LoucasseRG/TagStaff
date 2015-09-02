$(document).ready(function(){
	String.prototype.uppercase = function() {
		return this.charAt(0).toUpperCase() + this.slice(1);
	}
if(location.pathname.indexOf('threads') != -1){
		$('#QuickReply').find('.submitUnit').children('input').eq(0).before('<input class="button taigachat_bbcode xenForoSkin" style="float:right;" id="tagjs" value="Tag Staff" accesskey="t" type="button">');
	}
