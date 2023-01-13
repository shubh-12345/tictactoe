export const best_move=(board)=>{
    var ans = [-1, -1]
    var mx = 10

    for (var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if (board[i][j] === '*'){
                board[i][j] = 'o'

                var temp = minimax(board, 'x')
                board[i][j] = '*'
                if (temp <=mx){
                    
                    mx = temp
                    ans[0] = i
                    ans[1] = j
                    

                }
                console.log(temp)
            }
        }
    }
    return ans
}

export const goal=(board, move)=>{
    var draw=true
    
    for(var i=0;i<3;i++){
        var flag = 3
        for(var j=0;j<3;j++){
            if (board[i][j] === move)
                flag -= 1

            if(board[i][j]==='*')
                draw=false
        }

        if (flag === 0)
            return 1

    }

        

    for(var i=0;i<3;i++){
        var flag = 3
        for(j=0;j<3;j++){
            if (board[j][i] === move)
                flag -= 1
        }

        if (flag === 0)
            return 1
    }

    if (board[0][0] === move && board[1][1] === move && board[2][2] === move)
        return 1

    if (board[2][0] === move && board[1][1] === move && board[0][2] === move)
        return 1

    if(draw===true)
        return 0
}


export const minimax=(board, turn)=>{

    if (goal(board, 'o') === 1){
        return -1
    }

    if (goal(board, 'x') === 1){
        return 1
    }

    if (goal(board, 'o') === 0){
        return 0
    }

    if (goal(board, 'x') === 0){
        return 0
    }

    

    

    var mx = -10
    var mn = 10
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if (board[i][j] === '*'){
                if (turn === 'o'){
                    board[i][j] = 'o'
                    // console.log(board)
                    mn = Math.min(mn, minimax(board, 'x'))
                    board[i][j] = '*'
                }

                else{
                    board[i][j] = 'x'
                    // console.log(board)
                    mx = Math.max(mx, minimax(board, 'o'))
                    board[i][j] = '*'
                }
            }
        }
    }
    if( turn === 'o')
        return mn

    else 
        return mx

    
}





// export const setMoves=()=>{
//     var moves = 9
//     while (moves > 0){
        

//         if (goal(board, 'x') === 1){
//             print("YOU WIN!!!")
//             display(board)
//             break
//         }

//         var ans = best_move(board, moves-1)
//         board[ans[0]][ans[1]] = 'o'

//         if( goal(board, 'o') === 1){
//             print("AI WINS!!!")
//             display(board)
//             break
//         }

//         display(board)
//         moves -= 2
//     }
// }


