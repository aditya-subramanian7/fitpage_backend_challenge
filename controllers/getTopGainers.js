const topGainersData = {
  "id": 1,
  "name": "Top gainers",
  "tag": "Intraday Bullish",
  "color": "green",
  "criteria": [
    {
      "type": "plain_text",
      "text": "Sort - %price change in descending order"
    }
  ]
}

const getTopGainers = async (req, res, next) => {

  async function main() {
    res.json(topGainersData)
  }

  main()
}

module.exports = getTopGainers

