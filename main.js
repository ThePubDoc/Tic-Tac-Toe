function start_game(){
	document.turn = 'X';
	if(Math.random()<0.5){
		document.turn = 'O';
	}
	document.winner = null;
	set_message(document.turn + "get to start")
}

function set_message(msg){
	document.getElementById("messages").innerText = msg;
}

function next_move(square){
	if(square.innerText == "" && document.winner==null){
		square.innerText=document.turn;
		switch_turn();
	}
	else{
		if(document.winner != null)
		{
			set_message(document.turn +"already won!!!");
		}
		else{
			set_message("Box is already filled");
		}
	}
}

function switch_turn(){
	if(document.winner != null)
	{
		set_message(document.turn + " already won the game")
	}
	else if(check_winner(document.turn)){
		set_message(document.turn +" won!!!")
		document.winner = document.turn;
	}
	else if(document.turn == 'X'){
		document.turn = 'O';
		set_message("It's "+document.turn+" turn");
	}
	else{
		document.turn = 'X';
		set_message("It's "+document.turn+" turn");
	}
}

function check_winner(move){
	var result=false;
	if(check_row_column_diagnol(1,2,3,move) ||
		check_row_column_diagnol(4,5,6,move) ||
		check_row_column_diagnol(7,8,9,move) ||
		check_row_column_diagnol(1,4,7,move) ||
		check_row_column_diagnol(2,5,8,move) ||
		check_row_column_diagnol(3,6,9,move) ||
		check_row_column_diagnol(1,5,9,move) ||
		check_row_column_diagnol(3,5,7,move)) {
		result =true;
	}
	return result;
}

function check_row_column_diagnol(a,b,c,move){
	var result=false;
	if(get_box(a) == move && get_box(b)==move && get_box(c)==move){
		result = true;
	}
	return result;
}



function get_box(number){
	return document.getElementById(number).innerText;
}