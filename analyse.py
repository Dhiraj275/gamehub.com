import bs4, sys, csv

LOCAL_CURRENCY_SYMBOL = '$'

def main():
    
    # Import html file to beautiful soup
    with open("E:\Projects\Collage Projects\Compitation\Website\gamehub/temp.html", 'r', encoding='utf8') as file:
        html = bs4.BeautifulSoup(file, "html.parser")


    slider = html.select('.game-card')

    thisList = []
    for card in slider:     
        gameDict = {
            "gameName": "",
            "gameMRP": "",
            "gameDiscount": "",
            "gamePrice": "",
            "imgSrc": ""
        }   
        gameName = card.select(".game-name")[0].get_text()
        gameMRP = card.select(".game-mrp")[0].get_text()
        gamePrice = card.select(".game-price")[0].get_text()
        gameDiscount = card.select(".game-discount")[0].get_text()
        imgSrc = card.select(".game-img")[0]["src"]
        gameDict["gamePrice"] = gamePrice
        gameDict["gameMRP"] = gameMRP
        gameDict["gameDiscount"] = gameDiscount
        gameDict["gameName"] = gameName
        gameDict["gameSrc"] = imgSrc
        thisList.append(gameDict)
    
    open("gameArry.js", "w", encoding="utf-8").write( str(thisList))
# def string_extractor(payment,RecivedStatement, PaidStatement):
#     paymentCaption = payment.select(".mdl-typography--caption")[0].get_text()
#     paymentString = payment.select(".mdl-cell")[1].get_text()
#     if("Completed" in paymentCaption): 
#         if("Received" in paymentString):
#             amount =  float(paymentString.split(" ")[1].replace("₹", ""))
#             RecivedStatement.append(amount)        
#         elif("Google Pay" not in paymentString):
#             amountStr =  str(paymentString.split(" ")[1].replace("₹", "").replace(",",""))
#             PaidStatement.append(float(amountStr))    
#             # print(paymentString)
    

main()