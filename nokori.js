
        var weeks       = new Array('日','月','火','水','木','金','土');
        var today       = new Date();                           //      日付オブジェクト取得
        var week        = weeks[today.getDay()];        //      曜日取得
        var string      = '';                                           //      文言格納用変数
        var a = "※受付終了の場合は、予約注文となり翌月曜日に発送いたします。"
        var b = "4月27日～5月6日はお休みとなります。4月26日午後以降のご注文は、5月7日発送となります。"
        var c = "<h4>8月11日～18日はお休みとなります。8月10日以降のご注文は、8月19日以降の発送となります。</h4>"
        switch(week) {
                case '日':
                        // 日曜日の場合
                        string = '今週分は残り'.fontsize(6).bold()+'3'.fontsize(7).bold().fontcolor("red")+'セットです。'.fontsize(6).bold();
                        break;
                case '月':
                        // 月曜日の場合
                        string = '今週分は残り'.fontsize(6).bold()+'15'.fontsize(7).bold().fontcolor("red")+'セットです。'.fontsize(6).bold();
                        break;
                case '火':
                        // 火曜日の場合
                        string = '今週分は残り'.fontsize(6).bold()+'12'.fontsize(7).bold().fontcolor("red")+'セットです。'.fontsize(6).bold();
                        break;
                case '水':
                        // 水曜日の場合
                        string = '今週分は残り'.fontsize(6).bold()+'9'.fontsize(7).bold().fontcolor("red")+'セットです。'.fontsize(6).bold();
                        break;
                case '木':
                        // 木曜日の場合
                        string = '今週分は残り'.fontsize(6).bold()+'8'.fontsize(7).bold().fontcolor("red")+'セットです。'.fontsize(6).bold();
                        break;
                case '金':
                        // 金曜日の場合
                        string = '今週分は残り'.fontsize(6).bold()+'6'.fontsize(7).bold().fontcolor("red")+'セットです。'.fontsize(6).bold();
                        break;
                case '土':
                        // 土曜日の場合
                        string = '今週分は残り'.fontsize(6).bold()+'5'.fontsize(7).bold().fontcolor("red")+'セットです。'.fontsize(6).bold();
                        break;

        }

        // document.write( string +"<br>");
        document.write( c );
