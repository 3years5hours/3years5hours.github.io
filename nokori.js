
        var weeks       = new Array('日','月','火','水','木','金','土');
        var today       = new Date();                           //      日付オブジェクト取得
        var week        = weeks[today.getDay()];        //      曜日取得
        var string      = '';                                           //      文言格納用変数
        var a = "※受付終了の場合は、予約注文となり翌月曜日に発送いたします。"
        var b = "5月1日～5月5日はお休みとなります。4月のご注文は、29日受付終了、4月30日発送いたします。<br>5月1日～5月5日はお休みとなりますので、5月6日から発送再開いたします。"
        var c = "<h2>8月9日～16日はお休みとなります。8月8日以降のご注文は、8月17日以降の発送となります。</h2>"
        var d = "<h2>12月28日までのご注文は29日に発送、29日以降のご注文は1月4日の発送となります。</h2>"
        var e = "<h1>好評につき、5月販売分は売り切れにて販売終了しました。</h1>"
        var f = "<h1>※6月1日より販売を再開いたします。</h1>"
        var g = "注文が集中しているため、10/21(水)～10/23(金)のご注文は10/24(土)発送となります。10/20(火)21：00までのご注文は翌日発送いたします。"
        var h =

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
        document.write( b +"<br>"  );
        //document.write( string +"<br>" );// 通常の残りセット数
