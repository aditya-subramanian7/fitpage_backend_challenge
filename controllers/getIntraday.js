const getIntraday = async (req, res, next) => {
  const data = {
    "id": 2,
    "name": "Intraday buying seen in last 15 minutes",
    "tag": "Bullish",
    "color": "green",
    "criteria": [
      {
        "type": "plain_text",
        "text": "Current candle open = current candle high"
      },
      {
        "type": "plain_text",
        "text": "Previous candle open = previous candle high"
      },
      {
        "type": "plain_text",
        "text": "2 previous candle’s open = 2 previous candle’s high"
      }
    ]
  }

  async function main() {
    res.json(data)
  }

  main()
}

module.exports = getIntraday
