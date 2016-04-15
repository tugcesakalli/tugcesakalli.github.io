 };
                    numbers.push(number);
                }
            } else {
                numbers = numbersCookie;
            }
            var hidden = 0;
            for (var i = 0; i < numbers.length; i++) {
                ulText.append('<li id="t' + numbers[i].digit + '">' + numbers[i].word + '</li>');
                ulNum.append('<li id="n' + numbers[i].digit + '">' + numbers[i].digit + '</li>');
                if(numbers[i].placed){
                    $("#n" + i).hide();
                    hidden++;