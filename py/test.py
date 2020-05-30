# Created by Cépagrave

# https://www.sololearn.com/learn/11610/?ref=app
#####################################
myID="UMrGez"  # Empty for new player
#####################################
# OPTIONS: visualisation settings:

# please try to change those if the 
# board prints bad.
# (first, try: uni_width 1 or 0)
uni_width = 1
# There seem to be 2 kinds of
# width for unicode chess pieces
# try 0 or 1 to see what fits 
# better your device.
disp_width = 1
# narrow is safer ...
# possible values: 0,1,2,3
# 0 = narow ; 3 = widest
letters_or_pieces = 1
# 0 for letters, 1 for chess pieces

'''
---------------------------------
      _ ___ _     ____  _      _
||\ |/_` | |_)| |/  | |/ \|\ |/_`
|| \|._/ | | \\_/\_ | |\_/| \|._/

      ( INSTRUCIONS )
---------------------------------
To start a new game:

--> Save this code to your code 
    playground with a code name 
    of your choice.

Leave 'myID' empty (line 40)

--> Press 'RUN'

Leave #input prompt window empty
to start a new standard game.

Or:

--> input a board situation, using
    the "Ra8,Nb8,Bc8, ..." syntax
    upper case = BLACK (IA)
    lower case = white (Player)
    'k':king,'q':queen,'b':bishop
    'n': knight, 'r':rook '': pawn
    and then coordinates: a1 to h8
    For ex. the contest picture's
    string would be :
"RB8,BC8,KE8,NG8,RH8,A7,C7,D7,F7,H7,B6,NC6,G6,BC5,E5,bc4,QH4,b3,nc3,e3,nf3,g3,a2,bb2,c2,d2,qe2,f2,h2,ra1,rf1,kg1"

--> According to the resulting
    board displayed on your device
    and to your taste, set the
    visualisation options above

--> Copy/paste your new ID to 'myID',

--> Press 'RUN'

--> Enter your first move in the #input prompt
    Moves syntax is simple:
    it's a 'fromto' string with chess
    coordinates, ex: 'b1c3'
    Castling is possible, just enter
    the king's move ex:'e7c7'

Your game is on, run again
and enter a new move at each run.
'''
#####################################
# All this part was adapted from Kirk Schafer's amazing code allowing persistant data on SL
#####################################
import socket, ssl, json, urllib.parse as urlp, string
from random import randint, choice
import sys, codecs
sys.stdout = codecs.getwriter('utf_16')(sys.stdout.buffer, 'strict')
progInfo = {"name":"Memorise_it","version":"1.0","verXtra":"(alpha)"}
cr = chr(13)+chr(10);dcr = cr+cr
workarounds = {"getState":{"server":"docs.google.com","port":443,"qry":urlp.urlencode({"tq":"select * where B='{}' and C='{}' order by A desc limit 1".format(progInfo["name"], myID)}),"lines":["GET ",'/spreadsheets/d','/165j5AGZZOotBpztjkt0JsEcPLeNBYO8S7fSlsdTgkug/gviz',]},"postMsg" : {"server" : "script.google.com","port" : 443,"lines":['POST ','/macros/s','/AKfycbxmW9vaqyRPaVSpg1igeq','Y6aQHaDwLewR2njuRjvj8k3oXQ2dg',]},}

def openSocket(server, port):
  ss = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
  s = ssl.wrap_socket(ss, ssl_version=ssl.PROTOCOL_TLSv1, ciphers="ALL")
  s.connect((server,port))
  return s

def RestoreSavedState():
  global cr, dcr, workarounds
  wka=workarounds["getState"]
  qry, lines, server, port = wka["qry"], wka["lines"], wka["server"], wka["port"]
  lines.append('/tq?{} HTTP/1.1'.format(qry) + cr)
  lines.append('Host: {}'.format(server) + dcr)
  s = openSocket(server, port)
  [s.send(q.encode()) for q in lines]
  res = getResponse(s, 1)
  s.close()
  paren=res.find("(")+1
  oData = json.loads(res[paren:-4])
  try:
    rows=oData["table"]["rows"]
    if(len(rows) == 0):
      raise Exception("Something's wrong. No results to query [bad id?].")
    row=rows[0]["c"]
    data = eval(row[4]["v"])
    board = [[*data['board'][i:i+8]]for i in range(0,64,8)]
    history = data['hist']
    return board,history
  except Exception as e:
    print("Exception while loading data" + "*"*12)
    print(e)

def NewID():
  global myID
  myID = ''.join(choice(string.ascii_letters + string.digits) for _ in range(6))
  print('Your player ID will be:\n'.center(35))
  print(f'           --> {myID} <--\n')
  print('for this new game.\n'.center(35))
  print('Please read instructions,'.center(35))
  print('(Top of the code)'.center(35))
  print('You can play your first move'.center(35))
  print()


def writeState():
  global cr, dcr, workarounds, myID
  wka=workarounds["postMsg"]
  lines, server, port = wka["lines"], wka["server"], wka["port"]
  lines.append('/exec HTTP/1.1' +cr)
  lines.append('Host: {}'.format(server)+cr)
  s = openSocket(server, port)
  [s.send(q.encode()) for q in lines]
  pi = progInfo
  data={'app': pi["name"],'unique': myID,'sequence':pi["version"],'data':{'myID':myID,'board':board,'hist':history,'api':pi["version"],}}
  safedata=urlp.urlencode(data)
  s.send(("Content-Length: "+str(len(safedata)) + cr).encode())
  s.send(("Content-Type: application/x-www-form-urlencoded"+dcr).encode())
  s.send((safedata).encode())
  res=getResponse(s, 0)
  s.close()
  return(myID)

def getResponse(sock, thisOne):
  chunks,bytes_recd=[],0
  while True:
    chunk = sock.recv(8192)
    if chunk == b'': raise RuntimeError("Socket connection broken")
    chunks.append(chunk)
    bytes_recd=bytes_recd + len(chunk)
    if chunk == b'0\r\n\r\n': break
    if chunk[:30] == b'HTTP/1.1 302 Moved Temporarily': break
  return chunks[thisOne].decode()

def show(board):
  pieces = {' ':('[]' if uni_width ==1 else '.'),'K':'♚','Q':'♛','B':'♝','N':'♞','R':'♜','P':'♟','k':'♔','q':'♕','b':'♗','n':'♘','r':'♖','p':'♙'}
  pieces_set = [pieces[j] if letters_or_pieces else j for i in board for j in i]
  if disp_width == 0:

    print((\
    '  abcdefgh\n'*(1-uni_width)+\
    '  a b c d e f g h\n'*(uni_width)+\
    '8 {}{}{}{}{}{}{}{}\n'+\
    '7 {}{}{}{}{}{}{}{}\n'+\
    '6 {}{}{}{}{}{}{}{}\n'+\
    '5 {}{}{}{}{}{}{}{}\n'+\
    '4 {}{}{}{}{}{}{}{}\n'+\
    '3 {}{}{}{}{}{}{}{}\n'+\
    '2 {}{}{}{}{}{}{}{}\n'+\
    '1 {}{}{}{}{}{}{}{}\n').format(\
    *''.join(pieces_set)))
  elif disp_width == 1:
    print((\
    '   a b c d e f g h\n'*(1-uni_width)+\
    '  │a │b │c │d │e │f │g │h │\n'*(uni_width)+\
    '8 │{}│{}│{}│{}│{}│{}│{}│{}│\n'+\
    '7 │{}│{}│{}│{}│{}│{}│{}│{}│\n'+\
    '6 │{}│{}│{}│{}│{}│{}│{}│{}│\n'+\
    '5 │{}│{}│{}│{}│{}│{}│{}│{}│\n'+\
    '4 │{}│{}│{}│{}│{}│{}│{}│{}│\n'+\
    '3 │{}│{}│{}│{}│{}│{}│{}│{}│\n'+\
    '2 │{}│{}│{}│{}│{}│{}│{}│{}│\n'+\
    '1 │{}│{}│{}│{}│{}│{}│{}│{}│\n'+\
    '  ').format(\
    *''.join(pieces_set)))
  elif disp_width == 2:
    print((\
    '  a   b   c   d   e   f   g   h\n'+\
    '    │   │   │   │   │   │   │\n'+\
    '8 {} │ {} │ {} │ {} │ {} │ {} │ {} │ {}\n'+\
    ' ───┼───┼───┼───┼───┼───┼───┼───\n'+\
    '7 {} │ {} │ {} │ {} │ {} │ {} │ {} │ {}\n'+\
    ' ───┼───┼───┼───┼───┼───┼───┼───\n'+\
    '6 {} │ {} │ {} │ {} │ {} │ {} │ {} │ {}\n'+\
    ' ───┼───┼───┼───┼───┼───┼───┼───\n'+\
    '5 {} │ {} │ {} │ {} │ {} │ {} │ {} │ {}\n'+\
    ' ───┼───┼───┼───┼───┼───┼───┼───\n'+\
    '4 {} │ {} │ {} │ {} │ {} │ {} │ {} │ {}\n'+\
    ' ───┼───┼───┼───┼───┼───┼───┼───\n'+\
    '3 {} │ {} │ {} │ {} │ {} │ {} │ {} │ {}\n'+\
    ' ───┼───┼───┼───┼───┼───┼───┼───\n'+\
    '2 {} │ {} │ {} │ {} │ {} │ {} │ {} │ {}\n'+\
    ' ───┼───┼───┼───┼───┼───┼───┼───\n'+\
    '1 {} │ {} │ {} │ {} │ {} │ {} │ {} │ {}\n'+\
    '    │   │   │   │   │   │   │').format(\
    *''.join(pieces_set)))
  else:
    print((\
    '   a   b   c   d   e   f   g   h   \n'+\
    ' ┌───┬───┬───┬───┬───┬───┬───┬───┐\n'+\
    '8│ {} │ {} │ {} │ {} │ {} │ {} │ {} │ {} │\n'+\
    ' ├───┼───┼───┼───┼───┼───┼───┼───┤\n'+\
    '7│ {} │ {} │ {} │ {} │ {} │ {} │ {} │ {} │\n'+\
    ' ├───┼───┼───┼───┼───┼───┼───┼───┤\n'+\
    '6│ {} │ {} │ {} │ {} │ {} │ {} │ {} │ {} │\n'+\
    ' ├───┼───┼───┼───┼───┼───┼───┼───┤\n'+\
    '5│ {} │ {} │ {} │ {} │ {} │ {} │ {} │ {} │\n'+\
    ' ├───┼───┼───┼───┼───┼───┼───┼───┤\n'+\
    '4│ {} │ {} │ {} │ {} │ {} │ {} │ {} │ {} │\n'+\
    ' ├───┼───┼───┼───┼───┼───┼───┼───┤\n'+\
    '3│ {} │ {} │ {} │ {} │ {} │ {} │ {} │ {} │\n'+\
    ' ├───┼───┼───┼───┼───┼───┼───┼───┤\n'+\
    '2│ {} │ {} │ {} │ {} │ {} │ {} │ {} │ {} │\n'+\
    ' ├───┼───┼───┼───┼───┼───┼───┼───┤\n'+\
    '1│ {} │ {} │ {} │ {} │ {} │ {} │ {} │ {} │\n'+\
    ' └───┴───┴───┴───┴───┴───┴───┴───┘\n').format(\
    *''.join(pieces_set)))

def place_on_board(inpoot):
  board = [[' ' for j in range(8)]for i in range(8)]
  if inpoot == '':
    inpoot = "RA8,NB8,BC8,QD8,KE8,BF8,NG8,RH8,A7,B7,C7,D7,E7,F7,G7,H7,ra1,nb1,bc1,qd1,ke1,bf1,ng1,rh1,a2,b2,c2,d2,e2,f2,g2,h2"
  try:
    for p in inpoot.split(','):
      if len(p)==2:
        p = (p[0].islower()*'p'or'P')+p
      board[8-int(p[2])][ord(p[1].lower())-97] = p[0]
    board = ''.join(''.join(i)for i in board)
    return board
  except:
    print('                !!!')
    print('    The board configuration you')
    print('    tried to enter is not valid.')
    print('    Please try again, or leave it')
    print('    empty for a standard board.')
    print('                !!!')
    quit()

def longmoves(B,moves,captures,turn,steps,ro,co):
  capt_val = {'p':1,'n':3,'b':3,'r':5,'q':9,'k':50}    
  for m in steps:
    ro_,co_= ro+m[0],co+m[1]
    while ro_ in range(8) and co_ in range(8):
      capt = B[ro_][co_]
      if capt ==' ':
        moves.append((ro,co,ro_,co_))
        captures.append(0)
      else:
        if capt.islower()!=turn:
          moves.append((ro,co,ro_,co_))
          captures.append(capt_val[capt.lower()])
        break
      ro_,co_= ro_+m[0],co_+m[1]

def shortmoves(B,moves,captures,turn,steps,ro,co):
  capt_val = {'p':1,'n':3,'b':3,'r':5,'q':9,'k':50}
  for m in steps:
    ro_,co_ = ro+m[0],co+m[1]
    if ro_ in range(8) and co_ in range(8):
      capt = B[ro_][co_]
      if capt == ' ':
        moves.append((ro,co,ro_,co_))
        captures.append(0)
      else:
        if capt.islower()!=turn:
          moves.append((ro,co,ro_,co_))
          captures.append(capt_val[capt.lower()])

def checkcheck(B,moves,turn,values):
  ''' 
  This function discards the moves
  leading to check as not legal,
  and analyses each move's value 
  in the same loop
  '''
  not_allowed = set()
  for i,m in enumerate(moves):
    
    B_temp = [r[:]for r in B]
    apply_move(B_temp,m)
    
    # possible opponent moves:
    m_temp,c_temp = possible_moves(B_temp,not turn)
    l_m = len(m_temp)
    values[i]-=(l_m+sum(c_temp))
    
    # excluding moves leading to check:
    if any(c>=50 for c in c_temp):
      not_allowed.add(i)
      continue
  
    # for each opponent move
    for ii,mm in enumerate(m_temp):
      B_temp2 = [r[:]for r in B_temp]
      apply_move(B_temp2,mm)
      # all possible player move:
      mm_temp,cc_temp = possible_moves(B_temp2,turn)
      l_mm = len(mm_temp)
      values[i] += (l_mm+sum(cc_temp))/(l_m*2)
      '''
      # depth +1:
      # this level gives a 'Time limit exceed'
      # uncomment on local use only
      for iii,mmm in enumerate(mm_temp):
        B_temp3 = [r[:]for r in B_temp2]
        apply_move(B_temp3,mmm)
        mmm_temp,ccc_temp = possible_moves(B_temp3,not turn)
        values[i] -= (len(mmm_temp)+sum(ccc_temp))/(l_m*l_mm*3)
       ''' 
  allowed = set(range(len(moves)))-not_allowed
  moves = [moves[i] for i in allowed]
  values = [values[i] for i in allowed]
  
  v_max = max(values)
  med_val = (v_max+min(values))//2
  v_max -= med_val
  values = [i-med_val for i in values]
  return moves,values,v_max
  
def possible_moves(B,turn):
  capt_val = {'p':1,'n':3,'b':3,'r':5,'q':9,'k':50}
  moves = []
  captures = []
  for ro,row in enumerate(B):
    for co,piece in enumerate(row):
      if piece ==' 'or piece.islower()!=turn:
        continue
      piece = piece.lower()
      # PAWN MOVES:
      if piece == 'p':
        if turn: # White
          if ro==6:
          # white pawn double
            if B[4][co]==' ' and B[5][co]==' ':
              moves.append((6,co,4,co))
              captures.append(0)
          if ro:
            prom = (ro==1)*'='
            # straight
            if B[ro-1][co]==' ':
              moves.append((ro,co,ro-1,co))
              captures.append(8)
            # left capture
            if co:
              capt = B[ro-1][co-1]
              if capt.isupper():
                moves.append((ro,co,ro-1,co-1))
                captures.append(capt_val[capt.lower()]+8)
            # right capture
            if co<7:
              capt = B[ro-1][co+1]
              if capt.isupper():
                moves.append((ro,co,ro-1,co+1))
                captures.append(capt_val[capt.lower()]+8)
        else: # Black
          if ro==1:
          # black pawn double
            if B[3][co]==' ' and B[2][co]==' ':
              moves.append((1,co,3,co))
              captures.append(0)
          if ro<8:
            prom = (ro==6)*'='
            # straight
            if B[ro+1][co]==' ':
              moves.append((ro,co,ro+1,co))
              captures.append(8)
            # left capture
            if co:
              capt = B[ro+1][co-1]
              if capt.islower():
                moves.append((ro,co,ro+1,co-1))
                captures.append(capt_val[capt.lower()]+8)
            # right capture
            if co<7:
              capt = B[ro+1][co+1]
              if capt.islower():
                moves.append((ro,co,ro+1,co+1))
                captures.append(capt_val[capt.lower()]+8)
      # ROOK MOOVES:
      if piece == 'r':
        longmoves(B,moves,captures,turn,[(-1,0),(0,1),(1,0),(0,-1)],ro,co)
      # KNIGHT MOVES:
      if piece == 'n':
        shortmoves(B,moves,captures,turn,[(-2,1),(-1,2),(1,2),(2,1),(2,-1),(1,-2),(-1,-2),(-2,-1)],ro,co)
      # BISHOP MOVES
      if piece == 'b':
        longmoves(B,moves,captures,turn,[(-1,1),(1,1),(1,-1),(-1,-1)],ro,co)
      # QUEEN MOVES
      if piece == 'q':
        longmoves(B,moves,captures,turn,[(-1,0),(-1,1),(0,1),(1,1),(1,0),(1,-1),(0,-1),(-1,-1)],ro,co)
      # KING MOVES
      if piece == 'k':
        shortmoves(B,moves,captures,turn,[(-1,0),(-1,1),(0,1),(1,1),(1,0),(1,-1),(0,-1),(-1,-1)],ro,co)
        # CASTLING
        if turn: # white
          if ro==7 and co==4:
            if row[3]==' 'and row[2]==' 'and row[1]==' 'and row[0]=='r':
              if all([(i[1][:2]!=(7,4))and(i[1][:2]!=(7,0)) for i in history]):
                if not any(i[2:] in[(7,4),(7,3),(7,2)] for i in possible_moves(B,not turn)[0]):
                  moves.append((7,4,7,2))
                  captures.append(0)
            if row[5]==' 'and row[6]==' 'and row[7]=='r':
              if all([(i[1][:2]!=(7,4))and(i[1][:2]!=(7,7)) for i in history]):
                if not any(i[2:] in[(7,4),(7,5),(7,6)] for i in possible_moves(B,not turn)[0]):
                  moves.append((7,4,7,6))
                  captures.append(0)
        else: # black
          if ro==0 and co==4:
            if row[3]==' 'and row[2]==' 'and row[1]==' 'and row[0]=='R':
              if all([(i[1][:2]!=(0,4))and(i[1][:2]!=(0,0)) for i in history]):
                if not any(i[2:] in[(0,4),(0,3),(0,2)] for i in possible_moves(B,not turn)[0]):
                  moves.append((0,4,0,2))
                  captures.append(0)
            if row[5]==' 'and row[6]==' 'and row[7]=='R':
              if all([(i[1][:2]!=(0,4))and(i[1][:2]!=(0,7)) for i in history]):
                if not any(i[2:] in[(0,4),(0,5),(0,6)] for i in possible_moves(B,not turn)[0]):
                  moves.append((0,4,0,6))
                  captures.append(0)
  return moves,captures

def apply_move(brd,move):
  # Castling cases:
  if move in {(7,4,7,2),(7,4,7,6),(0,4,0,2),(0,4,0,6)}:
    a,b,c= move[0],move[1],move[3]
    k,r = 'kr' if move[0] else 'KR'
    brd[a][b]=' '
    brd[a][c]=k
    brd[a][7 if c==6 else 0]=' '
    brd[a][(b+c)//2]=r
  # Applying move to board
  else:
    brd[move[2]][move[3]]=brd[move[0]][move[1]]
    brd[move[0]][move[1]]=' '
  return brd

def game():
  inpoot = input()
  global board,turn,history
  # First Run, Creating ID
  if myID=="":
    history = ((0,(0,0,0,0)),)
    board = place_on_board(inpoot)
    NewID()
    show(board)
    writeState()
    quit()
  # Next Runs, game on:
  board,history = RestoreSavedState()
  turn = 1 if history[-1][0] == 0 else 0

  if turn: # white
    try:
      Move = (8-int(inpoot[1]),ord(inpoot[0])-97,8-int(inpoot[3]),ord(inpoot[2])-97)
    except:
      print('          ✋ WRONG INPUT ✋ \n')
      print(' Your move must be 4 characters long')
      print(" ex:'e2e4' (usual king's pawn opening)\n")
      show(board)
      quit()
  
  p_moves,values = possible_moves(board,turn)
  p_moves,values,v_max = checkcheck(board,p_moves,turn,values)

  if turn:
    if p_moves == []:
      print("Checkmate !\nYou lost\nC'est pas grave : )\nTry again !")
      quit()
    if Move not in p_moves:
      print('     ❌❌❌ Not a legal move ❗ ⛔⛔⛔')
      print('      (take a ☕ and try again ☺)\n')
      show(board)
      quit()
  else:
    if p_moves == []:
      print("     Whaaat ?!\n\n     My king is down !\n\n     Well done !\n\n(The guy who wrote my AI is just\n another lazy underwater trapezist)\n\n               )-:\n")
      print(    '   ⛴ ☔ ⛴ ☔ ⛴ ☔ ⛴ ☔ ⛴ ☔ ⛴ ☔\n\n')
      show(board)
      quit()
    Move = choice([p_moves[i] for i,v in enumerate(values) if v==v_max])
  
  # APPLYING Move
  apply_move(board,Move)
  
  history= history[-15:]+((turn,Move),)
  Move = ''.join([chr(Move[1]+97),str(8-Move[0]),chr(Move[3]+97),str(8-Move[2])])
  show(board)
  p_moves = (''.join([chr(i[1]+97),str(8-i[0]),chr(i[3]+97),str(8-i[2])])for i in p_moves)

  if turn:
    print('')
    print(f'         You played {Move[:2]}->{Move[2:]} !\n')
    print('          Now let me think')
    print('          press Run for me')
    print('        (--no input needed--)')
    print('              ⌚ ⏳ ⏰')
    print('               ⏱ ⏲')
    print('                 ⌛')
  else:
    print('')
    print(f'         I played {Move[:2]}->{Move[2:]}')
    print('\n          Your turn  ⚙🧠⚙\n')
    print('Move : Value\n------------')
    [print('',i,'',round(j,2)) for i,j in zip(p_moves,values)]
    print('\n\n\n\n\n\n\n')

  board = ''.join(''.join(i)for i in board)
  writeState()
  print('\n\n  Last moves:\n  ------------')
  print('\n'.join(['    '+('w'if i[0]else'b')+' '+''.join([chr(i[1][1]+97),str(8-i[1][0]),chr(i[1][3]+97),str(8-i[1][2])]) for i in history[1:]]))

game()

TODO : 'En passant'
TODO : 'You played ... I would have played ... if I were white'
TODO : 'Alphago level AI running in less than 3 esconds on SL server : )'
