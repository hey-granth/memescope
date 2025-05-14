# MemeScope 🧠🔥

A Django + Reddit-powered API that fetches trending memes from r/memes and serves them over a RESTful endpoint. Designed for use with a React frontend (or any frontend you like).

---
## 🚀 Features

* 🔥 Fetches hot posts from Reddit’s r/memes using PRAW.
* 🧰 REST API using Django Rest Framework.
* 📅 Stores meme data with timestamp, upvotes, comments.
* ⚛️ React-ready: consume /api/memes/ for frontend rendering.
---
## 🧱 Tech Stack

* Python 3.12
* Django 5.2
* Django REST Framework
* PRAW (Python Reddit API Wrapper)
* Python-Decouple (.env support)
---
## 📦 Installation

1. Clone the repo:

```bash
git clone https://github.com/your-username/memescope.git
cd memescope
```

2. Create virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

3. Install requirements:

```bash
pip install -r requirements.txt
```

4. Create .env file:

```
REDDIT_CLIENT_ID=your_client_id
REDDIT_CLIENT_SECRET=your_client_secret
REDDIT_USER_AGENT=memescope_script
```

5. Migrate database:

```bash
python manage.py makemigrations
python manage.py migrate
```

6. Fetch memes:

```bash
python manage.py fetch_memes
```

7. Run server:

```bash
python manage.py runserver
```

Visit: [http://127.0.0.1:8000/api/memes/](http://127.0.0.1:8000/api/memes/) to see the JSON API.

---
## 🛠 API Endpoint

GET /api/memes/

Returns the top 20 memes sorted by upvotes:

```json
[
  {
    "id": 1,
    "title": "Me watching memes instead of studying",
    "subreddit": "memes",
    "upvotes": 4500,
    "comments": 230,
    "image_url": "https://i.redd.it/example.png",
    "timestamp": "2025-05-14T09:00:00Z"
  }
  
]
```
---
## 🎯 Roadmap

* 🔍 Add search & filter
* 🧮 Trend analysis by time (e.g., daily/week)
* 📊 Frontend dashboard with React + Charting
* 🧠 Meme sentiment analysis?

---
## 🤝 Contributing

Pull requests are welcome. Please open an issue first to discuss changes.

---
## Author
[Granth Agarwal](https://www.github.com/hey-granth)