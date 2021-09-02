sqlite3 urltowords.db "CREATE TABLE urltowords (id integer primary key autoincrement, category text,value text, word1 text, word2 text, word3 text, date date default CURRENT_TIMESTAMP);"
sqlite3 urltowords.db "CREATE TABLE words (id int,word text);"
sqlite3 -separator , urltowords.db ".import words800.csv words"
