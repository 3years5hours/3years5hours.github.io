
        var weeks       = new Array('日','月','火','水','木','金','土');
        var today       = new Date();                           //      日付オブジェクト取得
        var week        = weeks[today.getDay()];        //      曜日取得
        var string      = '';                                           //      文言格納用変数
        var a = "※受付終了の場合は、予約注文となり翌月曜日に発送いたします。"
        var b = "5月1日～5月6日はお休みとなります。4月29日午後以降のご注文は、5月7日から発送を再開いたします。"
        var c = "<h2>8月11日～18日はお休みとなります。8月10日以降のご注文は、8月19日以降の発送となります。</h2>"
        var d = "<h2>12月27日までのご注文は28日に発送、28日以降のご注文は1月4日以降の発送となります。</h2>"
        var e = "<h2>好評につき、5月販売分は売り切れにて販売終了しました。</h2>"
        var f = "<h2>※6月1日より販売を再開いたします。</h2>"
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
        document.write( e +"<br>" + f );
        //document.write( string +"<br>" );
