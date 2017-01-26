  var correct_ans;
  var current_qu, current_qu_show;
  var v_total_que = 120;
  var v_max_choices = 4;
  
  function initPage(){
    correct_ans = 0;
    current_qu = 0;
    
    for (var each_qu=0;each_qu<v_total_que;each_qu++){
      hide(document.getElementById(each_qu+'lianswer'));
      hide(document.getElementById(each_qu+'ansexplanation'));
      
      document.getElementById('correct_ans').innerHTML = 0;
      document.getElementById('current_qu').innerHTML = 0;
      document.getElementById('showcurrent_qu').innerHTML = 1 +' of ' + v_total_que;
      document.getElementById(each_qu+'answerspan').innerHTML = '';
      document.getElementById(each_qu+'lianswer').className = '';
      document.getElementById('test_result').innerHTML = 0 + '/' + v_total_que;
      var ele = document.getElementsByName(each_qu+'radio');
      for(var i=0;i<ele.length;i++)
        ele[i].checked = false;
    }
    next_question(0);
  }
  
  function hideshow(element){
    if (typeof(element) == 'undefined' || element == null || !document.getElementById) return
    
    if (element.style.display=='block')
      element.style.display='none';
    else
      element.style.display='block';
  }
  
  function show(element){
    if (typeof(element) == 'undefined' || element == null || !document.getElementById) return
    element.style.display='block';
  }
  
  function hide(element){
    if (typeof(element) == 'undefined' || element == null || !document.getElementById) return
    element.style.display='none';
  }
  
  function checkexplanation() {
    //alert(1);
    current_qu = document.getElementById('current_qu').innerHTML;
    //alert(current_qu);
    hideshow(document.getElementById(current_qu + 'ansexplanation'))
    if (document.getElementById(current_qu+'answerspan').innerHTML=="") {
      document.getElementById(current_qu+'answerspan').innerHTML = '-';
      document.getElementById(current_qu+'lianswer').className = 'wrong';
    }
  }

  function checkeachanswer() {
    current_qu = document.getElementById('current_qu').innerHTML;
    //alert(document.getElementById(current_qu+'answerspan').innerHTML);
    
    if (current_qu < v_total_que && document.getElementById(current_qu+'answerspan').innerHTML == "") {
      correct_ans = document.getElementById('correct_ans').innerHTML;
      current_qu_show = parseInt(current_qu,10)+1;
      //alert('before-' + correct_ans);
      
      if (document.getElementById(current_qu+'canswer').value == jsonObj.question[current_qu].answer ) {
        document.getElementById(current_qu+'answerspan').innerHTML = 'Correct!';
        document.getElementById(current_qu+'lianswer').className = 'correct';
        correct_ans++;
        document.getElementById('correct_ans').innerHTML = correct_ans;
      } else {
        if (document.getElementById(current_qu+'canswer').value != '') {
          document.getElementById(current_qu+'answerspan').innerHTML = 'Wrong!';
          document.getElementById(current_qu+'lianswer').className = 'wrong';
        }
      }
      //alert('after-' + correct_ans + '- total - ' + v_total_que);
      document.getElementById('test_result').innerHTML = correct_ans + '/' + v_total_que + ' (' + correct_ans*100/v_total_que + '%)';
    }
  }
  
  function next_question(p_next) {
    var next_qu
    current_qu = document.getElementById('current_qu').innerHTML;
    next_qu = parseInt(current_qu, 10) + p_next;
    //alert(current_qu)
    if (next_qu < v_total_que && next_qu >= 0) {
      correct_ans = document.getElementById('correct_ans').innerHTML;
      
      next_qu = parseInt(current_qu, 10) + p_next;
      
      current_qu_show = parseInt(next_qu,10)+1;
      document.getElementById('showcurrent_qu').innerHTML = current_qu_show +' of ' + v_total_que;
      
      if (p_next != 0) {
        hide(document.getElementById(current_qu+'lianswer'));
        show(document.getElementById(next_qu+'lianswer'));
      }
      if (p_next == 0) {
        //show(document.getElementById(current_qu+'lianswer'));
        show(document.getElementById(p_next+'lianswer'));
      }
      document.getElementById('current_qu').innerHTML = next_qu;
      document.getElementById('showcurrent_qu').innerHTML = current_qu_show +' of ' + v_total_que;
      document.getElementById('test_result').innerHTML = correct_ans+'/'+total_question;
    }
  }
  
