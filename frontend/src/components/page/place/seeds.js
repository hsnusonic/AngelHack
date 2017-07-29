import uuid from "uuid";

export const seatData = [
	[0,0,0,0,1,1,1,1,2,2,0,2,2,1,1,1,1,1,1,1,1,0,2,2,1,1,1,1,0,0,0,0],
	[2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2],
	[2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2],
	[2,2,2,2,1,1,1,1,1,1,0,2,2,2,1,1,1,1,1,1,2,0,2,2,1,1,2,2,2,2,2,2],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[2,2,1,1,1,1,1,1,2,2,0,2,2,1,1,1,1,1,1,1,1,0,2,2,1,1,1,1,1,1,2,2],
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];

export const movieDetails = {
  "result": {
    "movie_id": "c5516129d1e94c71841f09d3d18290e2",
    "movie_category": "愛情,冒險",
    "movie_title": {
      "zh_tw": "樂來樂愛你",
      "en_us": "La La Land"
    },
    "release_date": 1488297600000,
    "grade": 1,
    "movie_staff": [
      {
        "staff_type": "1",
        "staff_id": "00001",
        "staff_name": "馮迪索"
      },
      {
        "staff_type": "1",
        "staff_id": "00002",
        "staff_name": "大衛艾亞"
      },
      {
        "staff_type": "2",
        "staff_id": "00002",
        "staff_name": "大衛艾亞"
      },
      {
        "staff_type": "3",
        "staff_id": "00002",
        "staff_name": "大衛艾亞"
      }
    ],
    "movie_tag": [
      {
        "tag_id": "00001",
        "tag_name": "馮迪索"
      },
      {
        "tag_id": "00002",
        "tag_name": "最強老爸"
      }
    ],
    "movie_poster": [
      {
        "poster_id": "00001",
        "poster_type": 1,
        "poster_url": "電影海報所在位置"
      },
      {
        "poster_id": "00001",
        "poster_type": 2,
        "poster_url": "電影劇照所在位置"
      }
    ],
    "movie_preview": [
      {
        "preview_id": "00001",
        "preview_type": 1,
        "refrence_id": "xXHWBpNRSN4",
        "preview_body": "<iframe width='560' height='315' src='http://www.youtube.com/embed/xXHWBpNRSN4' frameborder='0' allowfullscreen></iframe>"
      }
    ],
    "length": 148,
    "imdb_score": 7.8,
    "rt_score": "74%",
    "ez_score": 4,
    "comment_count": 3,
    "movie_description": "電影介紹詳細內容",
    "sort": 1,
    "status": 1,
    "click_count": 100
  },
  "code": 200,
  "status": "success"
};

/*取得指定影城所有電影開演清單*/
export const cinemaMovies = {
  "result": {
    "total_pages": 3,
    "total_records": 30,
    "page": 1,
    "list": [
      {
        "date": 1490630400000,
        "movie_list": [
          {
            "movie_id": "c5516129d1e94c71841f09d3d18290e2",
            "movie_title": {
              "zh_tw": "樂來樂愛你",
              "en_us": "La La Land"
            },
            "grade": 1,
            "release_date": 1488297600000,
            "ez_score": 3.5,
            "comment_count": 3,
            "length": 148,
            "movie_description": "電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹",
			"poster_url": "http://www.photowant.com/photo101/fbkr35700672/pl_fbkr35700672_0003.jpg",
            "sdata": [
              {
                "mid": uuid(),
                "movie_version": "數1位",
                "data_session": [
                  {
                   "session_id": uuid(),
                    "session_time": 1490615100000,
                    "left_seats": 155,
                    "total_seats": 400
                  },
                  {
                    "session_id": uuid(),
                    "session_time": 1490572800000,
                    "left_seats": 166,
                    "total_seats": 400
                  },
                  {
                    "session_id": uuid(),
                    "session_time": 1490572800000,
                    "left_seats": 166,
                    "total_seats": 400
                  }
                ]
              },
              {
                "mid": uuid(),
                "movie_version": "3D",
                "data_session": [
                  {
                    "session_id": uuid(),
                    "session_time": 1490572800000,
                    "left_seats": 166,
                    "total_seats": 400
                  },
                  {
                    "session_id": uuid(),
                    "session_time": 1490572800000,
                    "left_seats": 166,
                    "total_seats": 400
                  },
                  {
                    "session_iId": uuid(),
                    "session_time": 1490572800000,
                    "left_seats": 166,
                    "total_seats": 400
                  }
                ]
              }
            ]
		},
		{
		  "movie_id": uuid(),
		  "movie_title": {
			"zh_tw": "屍速列車",
			"en_us": "Train to Busan"
		  },
		  "grade": 3,
		  "release_date": 1488297600000,
		  "ez_score": 5,
		  "comment_count": 3,
		  "length": 148,
		  "movie_description": "電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹",
		  "poster_url": "http://www.photowant.com/photo101/fbkr35700672/pl_fbkr35700672_0003.jpg",
		  "sdata": [
			{
			  "mid": uuid(),
			  "movie_version": "數位",
			  "data_session": [
				{
				 "session_id": uuid(),
				  "session_time": 1490615100000,
				  "left_seats": 155,
				  "total_seats": 400
				},
				{
				  "session_id": uuid(),
				  "session_time": 1490572800000,
				  "left_seats": 166,
				  "total_seats": 400
				},
				{
				  "session_id": uuid(),
				  "session_time": 1490572800000,
				  "left_seats": 166,
				  "total_seats": 400
				}
			  ]
			},
			{
			  "mid": uuid(),
			  "movie_version": "3D",
			  "data_session": [
				{
				  "session_id": uuid(),
				  "session_time": 1490572800000,
				  "left_seats": 166,
				  "total_seats": 400
				},
				{
				  "session_id": uuid(),
				  "session_time": 1490572800000,
				  "left_seats": 166,
				  "total_seats": 400
				},
				{
				  "session_iId": uuid(),
				  "session_time": 1490572800000,
				  "left_seats": 166,
				  "total_seats": 400
				}
			  ]
			}
		  ]
	  },
	  {
		"movie_id": uuid(),
		"movie_title": {
		  "zh_tw": "美女與野獸",
		  "en_us": "Beauty and the Beast"
		},
		"grade": 1,
		"release_date": 1488297600000,
		"ez_score": 2,
		"comment_count": 3,
		"length": 148,
		"movie_description": "電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹",
		"poster_url": "http://www.photowant.com/photo101/fbkr35700672/pl_fbkr35700672_0003.jpg",
		"sdata": [
		  {
			"mid": uuid(),
			"movie_version": "數位",
			"data_session": [
			  {
			   "session_id": uuid(),
				"session_time": 1490615100000,
				"left_seats": 155,
				"total_seats": 400
			  },
			  {
				"session_id": uuid(),
				"session_time": 1490572800000,
				"left_seats": 166,
				"total_seats": 400
			  },
			  {
				"session_id": uuid(),
				"session_time": 1490572800000,
				"left_seats": 166,
				"total_seats": 400
			},
			{
			  "session_id": uuid(),
			  "session_time": 1490572800000,
			  "left_seats": 166,
			  "total_seats": 400
			}
			]
		  },
		  {
			"mid": uuid(),
			"movie_version": "3D",
			"data_session": [
			  {
				"session_id": uuid(),
				"session_time": 1490572800000,
				"left_seats": 166,
				"total_seats": 400
			  },
			  {
				"session_id": uuid(),
				"session_time": 1490572800000,
				"left_seats": 166,
				"total_seats": 400
			  },
			  {
				"session_iId": uuid(),
				"session_time": 1490572800000,
				"left_seats": 166,
				"total_seats": 400
			  }
			]
		  }
		]
	},
	{
	  "movie_id": uuid(),
	  "movie_title": {
		"zh_tw": "攻殼機動隊",
		"en_us": "The Shadow of Shell"
	  },
	  "grade": 1,
	  "release_date": 1488297600000,
	  "ez_score": 3.5,
	  "comment_count": 3,
	  "length": 148,
	  "movie_description": "電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹",
	  "poster_url": "http://www.photowant.com/photo101/fbkr35700672/pl_fbkr35700672_0003.jpg",
	  "sdata": [
		{
		  "mid": uuid(),
		  "movie_version": "數位",
		  "data_session": [
			{
			 "session_id": uuid(),
			  "session_time": 1490615100000,
			  "left_seats": 155,
			  "total_seats": 400
			},
			{
			  "session_id": uuid(),
			  "session_time": 1490572800000,
			  "left_seats": 166,
			  "total_seats": 400
			},
			{
			  "session_id": uuid(),
			  "session_time": 1490572800000,
			  "left_seats": 166,
			  "total_seats": 400
			}
		  ]
		},
		{
		  "mid": uuid(),
		  "movie_version": "3D",
		  "data_session": [
			{
			  "session_id": uuid(),
			  "session_time": 1490572800000,
			  "left_seats": 166,
			  "total_seats": 400
			},
			{
			  "session_id": uuid(),
			  "session_time": 1490572800000,
			  "left_seats": 166,
			  "total_seats": 400
			},
			{
			  "session_iId": uuid(),
			  "session_time": 1490572800000,
			  "left_seats": 166,
			  "total_seats": 400
			}
		  ]
		}
	  ]
  },
  {
	"movie_id": uuid(),
	"movie_title": {
	  "zh_tw": "玩命關頭8",
	  "en_us": "Fast and Furious 8"
	},
	"grade": 1,
	"release_date": 1488297600000,
	"ez_score": 3.5,
	"comment_count": 3,
	"length": 148,
	"movie_description": "電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹",
	"poster_url": "http://www.photowant.com/photo101/fbkr35700672/pl_fbkr35700672_0003.jpg",
	"sdata": [
	  {
		"mid": uuid(),
		"movie_version": "數位",
		"data_session": [
		  {
		   "session_id": uuid(),
			"session_time": 1490615100000,
			"left_seats": 155,
			"total_seats": 400
		  },
		  {
			"session_id": uuid(),
			"session_time": 1490572800000,
			"left_seats": 166,
			"total_seats": 400
		  },
		  {
			"session_id": uuid(),
			"session_time": 1490572800000,
			"left_seats": 166,
			"total_seats": 400
		  }
		]
	  },
	  {
		"mid": uuid(),
		"movie_version": "3D",
		"data_session": [
		  {
			"session_id": uuid(),
			"session_time": 1490572800000,
			"left_seats": 166,
			"total_seats": 400
		  },
		  {
			"session_id": uuid(),
			"session_time": 1490572800000,
			"left_seats": 166,
			"total_seats": 400
		  },
		  {
			"session_iId": uuid(),
			"session_time": 1490572800000,
			"left_seats": 166,
			"total_seats": 400
		  }
		]
	  }
	]
},
{
  "movie_id": uuid(),
  "movie_title": {
	"zh_tw": "衝突的一天",
	"en_us": "CLASH"
  },
  "grade": 1,
  "release_date": 1488297600000,
  "ez_score": 3.5,
  "comment_count": 3,
  "length": 148,
  "movie_description": "電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹",
  "poster_url": "http://www.photowant.com/photo101/fbkr35700672/pl_fbkr35700672_0003.jpg",
  "sdata": [
	{
	  "mid": uuid(),
	  "movie_version": "數位",
	  "data_session": [
		{
		 "session_id": uuid(),
		  "session_time": 1490615100000,
		  "left_seats": 155,
		  "total_seats": 400
		},
		{
		  "session_id": uuid(),
		  "session_time": 1490572800000,
		  "left_seats": 166,
		  "total_seats": 400
		},
		{
		  "session_id": uuid(),
		  "session_time": 1490572800000,
		  "left_seats": 166,
		  "total_seats": 400
		}
	  ]
	},
	{
	  "mid": uuid(),
	  "movie_version": "3D",
	  "data_session": [
		{
		  "session_id": uuid(),
		  "session_time": 1490572800000,
		  "left_seats": 166,
		  "total_seats": 400
		},
		{
		  "session_id": uuid(),
		  "session_time": 1490572800000,
		  "left_seats": 166,
		  "total_seats": 400
		},
		{
		  "session_iId": uuid(),
		  "session_time": 1490572800000,
		  "left_seats": 166,
		  "total_seats": 400
		}
	  ]
	}
  ]
},
{
  "movie_id": uuid(),
  "movie_title": {
	"zh_tw": "私人採購",
	"en_us": "Personal Shopper"
  },
  "grade": 1,
  "release_date": 1488297600000,
  "ez_score": 3.5,
  "comment_count": 3,
  "length": 148,
  "movie_description": "電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹",
  "poster_url": "http://www.photowant.com/photo101/fbkr35700672/pl_fbkr35700672_0003.jpg",
  "sdata": [
	{
	  "mid": uuid(),
	  "movie_version": "數位",
	  "data_session": [
		{
		 "session_id": uuid(),
		  "session_time": 1490615100000,
		  "left_seats": 155,
		  "total_seats": 400
		},
		{
		  "session_id": uuid(),
		  "session_time": 1490572800000,
		  "left_seats": 166,
		  "total_seats": 400
		},
		{
		  "session_id": uuid(),
		  "session_time": 1490572800000,
		  "left_seats": 166,
		  "total_seats": 400
		}
	  ]
	},
	{
	  "mid": uuid(),
	  "movie_version": "3D",
	  "data_session": [
		{
		  "session_id": uuid(),
		  "session_time": 1490572800000,
		  "left_seats": 166,
		  "total_seats": 400
		},
		{
		  "session_id": uuid(),
		  "session_time": 1490572800000,
		  "left_seats": 166,
		  "total_seats": 400
		},
		{
		  "session_iId": uuid(),
		  "session_time": 1490572800000,
		  "left_seats": 166,
		  "total_seats": 400
		}
	  ]
	}
  ]
},
{
  "movie_id": uuid(),
  "movie_title": {
	"zh_tw": "動畫人生",
	"en_us": "Life, Animated"
  },
  "grade": 1,
  "release_date": 1488297600000,
  "ez_score": 3.5,
  "comment_count": 3,
  "length": 148,
  "movie_description": "電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹",
  "poster_url": "http://www.photowant.com/photo101/fbkr35700672/pl_fbkr35700672_0003.jpg",
  "sdata": [
	{
	  "mid": uuid(),
	  "movie_version": "數位",
	  "data_session": [
		{
		 "session_id": uuid(),
		  "session_time": 1490615100000,
		  "left_seats": 155,
		  "total_seats": 400
		},
		{
		  "session_id": uuid(),
		  "session_time": 1490572800000,
		  "left_seats": 166,
		  "total_seats": 400
		},
		{
		  "session_id": uuid(),
		  "session_time": 1490572800000,
		  "left_seats": 166,
		  "total_seats": 400
		}
	  ]
	},
	{
	  "mid": uuid(),
	  "movie_version": "3D",
	  "data_session": [
		{
		  "session_id": uuid(),
		  "session_time": 1490572800000,
		  "left_seats": 166,
		  "total_seats": 400
		},
		{
		  "session_id": uuid(),
		  "session_time": 1490572800000,
		  "left_seats": 166,
		  "total_seats": 400
		},
		{
		  "session_iId": uuid(),
		  "session_time": 1490572800000,
		  "left_seats": 166,
		  "total_seats": 400
		}
	  ]
	}
  ]
}
        ]
	},
	{
	  "date": 1490716800000,
	  "movie_list": [
		{
		  "movie_id": uuid(),
		  "movie_title": {
			"zh_tw": "電影版影子籃球員LAST GAME",
			"en_us": "KUROKO'S BASKETBALL THE MOVIE LAST GAME"
		  },
		  "grade": 1,
		  "release_date": 1488297600000,
		  "ez_score": 3.5,
		  "comment_count": 3,
		  "length": 148,
		  "movie_description": "電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹",
		  "poster_url": "http://www.photowant.com/photo101/fbkr35700672/pl_fbkr35700672_0003.jpg",
		  "sdata": [
			{
			  "mid": uuid(),
			  "movie_version": "數位",
			  "data_session": [
				{
				 "session_id": uuid(),
				  "session_time": 1490615100000,
				  "left_seats": 155,
				  "total_seats": 400
				},
				{
				  "session_id": uuid(),
				  "session_time": 1490572800000,
				  "left_seats": 166,
				  "total_seats": 400
				},
				{
				  "session_id": uuid(),
				  "session_time": 1490572800000,
				  "left_seats": 166,
				  "total_seats": 400
				}
			  ]
			},
			{
			  "mid": uuid(),
			  "movie_version": "3D",
			  "data_session": [
				{
				  "session_id": uuid(),
				  "session_time": 1490572800000,
				  "left_seats": 166,
				  "total_seats": 400
				},
				{
				  "session_id": uuid(),
				  "session_time": 1490572800000,
				  "left_seats": 166,
				  "total_seats": 400
				},
				{
				  "session_iId": uuid(),
				  "session_time": 1490572800000,
				  "left_seats": 166,
				  "total_seats": 400
				}
			  ]
			}
		  ]
		}
	  ]
  },
  {
	"date": 1490630400000,
	"movie_list": [
	  {
		"movie_id": uuid(),
		"movie_title": {
		  "zh_tw": "樂來樂愛你",
		  "en_us": "La La Land"
		},
		"grade": 1,
		"release_date": 1488297600000,
		"ez_score": 3.5,
		"comment_count": 3,
		"length": 148,
		"movie_description": "電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹",
		"sdata": [
		  {
			"mid": uuid(),
			"movie_version": "數位",
			"data_session": [
			  {
			   "session_id": uuid(),
				"session_time": 1490615100000,
				"left_seats": 155,
				"total_seats": 400
			  },
			  {
				"session_id": uuid(),
				"session_time": 1490572800000,
				"left_seats": 166,
				"total_seats": 400
			  },
			  {
				"session_id": uuid(),
				"session_time": 1490572800000,
				"left_seats": 166,
				"total_seats": 400
			  }
			]
		  },
		  {
			"mid": uuid(),
			"movie_version": "3D",
			"data_session": [
			  {
				"session_id": uuid(),
				"session_time": 1490572800000,
				"left_seats": 166,
				"total_seats": 400
			  },
			  {
				"session_id": uuid(),
				"session_time": 1490572800000,
				"left_seats": 166,
				"total_seats": 400
			  },
			  {
				"session_iId": uuid(),
				"session_time": 1490572800000,
				"left_seats": 166,
				"total_seats": 400
			  }
			]
		  }
		]
	  }
	]
},
{
  "date": 1490630400000,
  "movie_list": [
	{
	  "movie_id": uuid(),
	  "movie_title": {
		"zh_tw": "樂來樂愛你",
		"en_us": "La La Land"
	  },
	  "grade": 1,
	  "release_date": 1488297600000,
	  "ez_score": 3.5,
	  "comment_count": 3,
	  "length": 148,
	  "movie_description": "電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹",
	  "sdata": [
		{
		  "mid": uuid(),
		  "movie_version": "數位",
		  "data_session": [
			{
			 "session_id": uuid(),
			  "session_time": 1490615100000,
			  "left_seats": 155,
			  "total_seats": 400
			},
			{
			  "session_id": uuid(),
			  "session_time": 1490572800000,
			  "left_seats": 166,
			  "total_seats": 400
			},
			{
			  "session_id": uuid(),
			  "session_time": 1490572800000,
			  "left_seats": 166,
			  "total_seats": 400
			}
		  ]
		},
		{
		  "mid": uuid(),
		  "movie_version": "3D",
		  "data_session": [
			{
			  "session_id": uuid(),
			  "session_time": 1490572800000,
			  "left_seats": 166,
			  "total_seats": 400
			},
			{
			  "session_id": uuid(),
			  "session_time": 1490572800000,
			  "left_seats": 166,
			  "total_seats": 400
			},
			{
			  "session_iId": uuid(),
			  "session_time": 1490572800000,
			  "left_seats": 166,
			  "total_seats": 400
			}
		  ]
		}
	  ]
	}
  ]
},
{
  "date": 1490630400000,
  "movie_list": [
	{
	  "movie_id": uuid(),
	  "movie_title": {
		"zh_tw": "樂來樂愛你",
		"en_us": "La La Land"
	  },
	  "grade": 1,
	  "release_date": 1488297600000,
	  "ez_score": 3.5,
	  "comment_count": 3,
	  "length": 148,
	  "movie_description": "電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹電影介紹",
	  "sdata": [
		{
		  "mid": uuid(),
		  "movie_version": "數位",
		  "data_session": [
			{
			 "session_id": uuid(),
			  "session_time": 1490615100000,
			  "left_seats": 155,
			  "total_seats": 400
			},
			{
			  "session_id": uuid(),
			  "session_time": 1490572800000,
			  "left_seats": 166,
			  "total_seats": 400
			},
			{
			  "session_id": uuid(),
			  "session_time": 1490572800000,
			  "left_seats": 166,
			  "total_seats": 400
			}
		  ]
		},
		{
		  "mid": uuid(),
		  "movie_version": "3D",
		  "data_session": [
			{
			  "session_id": uuid(),
			  "session_time": 1490572800000,
			  "left_seats": 166,
			  "total_seats": 400
			},
			{
			  "session_id": uuid(),
			  "session_time": 1490572800000,
			  "left_seats": 166,
			  "total_seats": 400
			},
			{
			  "session_iId": uuid(),
			  "session_time": 1490572800000,
			  "left_seats": 166,
			  "total_seats": 400
			}
		  ]
		}
	  ]
	}
  ]
},

    ]
  },
  "code": 200,
  "status": "success"
};

export const cinemaDetails = {
  "result": {
    "cinema_id": "1b47c492287211e69b8d6f151a450c6d",
    "cinema_name": {
     "zh_tw": "梅花影城",
     "en_us": "Blossom"
    },
    "cinema_code": "3331",
    "cinema_sever_name": "TAIPEI17",
    "sale_system":2,
    "city": "01",
    "location": 1,
    "address": "台北市新店區寶強路6-3號5樓",
    "phone": "(02)9999-9999",
    "last_collect_time": 30,
    "payeasy_code": "54229636(2)",
    "online_sale": 1,
    "sort": 1,
    "status": 1
  },
  "code": 200,
  "status": "success"
};

/*取得指定電影及指定影城開演電影場次清單*/
export const apiResult2 = {
  "result": {
    "total_pages": 3,
    "total_records": 30,
    "page": 1,
    "list": [
      {
        "date": 1490630400000,
        "sdata": [
          {
            "movie_id": "afd170efdc544a9ea8e164c05a33511c",
            "movie_version": "數位",
            "data_session": [
              {
                "session_id": uuid(),
                "session_time": 1490572800001,
                "left_seats": 155,
                "total_seats": 400
              },
			  {
                "session_id": uuid(),
                "session_time": 1490572800001,
                "left_seats": 155,
                "total_seats": 400
              },
			  {
                "session_id": uuid(),
                "session_time": 1490572800001,
                "left_seats": 155,
                "total_seats": 400
              },
			  {
                "session_id": uuid(),
                "session_time": 1490572800001,
                "left_seats": 155,
                "total_seats": 400
              },
			  {
                "session_id": uuid(),
                "session_time": 1490572800001,
                "left_seats": 155,
                "total_seats": 400
              },
			  {
                "session_id": uuid(),
                "session_time": 1490572800001,
                "left_seats": 155,
                "total_seats": 400
              },
              {
                "session_id": uuid(),
                "session_time": 1490572800002,
                "left_seats": 166,
                "total_seats": 400
              },
              {
                "session_id": uuid(),
                "session_time": 1490572800003,
                "left_seats": 166,
                "total_seats": 400
			},
			{
			  "session_id": uuid(),
			  "session_time": 1490572800001,
			  "left_seats": 155,
			  "total_seats": 400
			},
			{
			  "session_id": uuid(),
			  "session_time": 1490572800001,
			  "left_seats": 155,
			  "total_seats": 400
			},
			{
			  "session_id": uuid(),
			  "session_time": 1490572800002,
			  "left_seats": 166,
			  "total_seats": 400
			},
			{
			  "session_id": uuid(),
			  "session_time": 1490572800003,
			  "left_seats": 166,
			  "total_seats": 400
		  },
		  {
			"session_id": uuid(),
			"session_time": 1490572800001,
			"left_seats": 155,
			"total_seats": 400
		  },
		  {
			"session_id": uuid(),
			"session_time": 1490572800001,
			"left_seats": 155,
			"total_seats": 400
		  },
		  {
			"session_id": uuid(),
			"session_time": 1490572800002,
			"left_seats": 166,
			"total_seats": 400
		  },
		  {
			"session_id": uuid(),
			"session_time": 1490572800003,
			"left_seats": 166,
			"total_seats": 400
		  }
            ]
          },
          {
            "movie_id": "08a3b257790a4b78a2268d611e8ff4c7",
            "movie_version": "3D",
            "data_session": [
              {
                "session_id": uuid(),
                "session_time": 1490572800001,
                "left_seats": 166,
                "total_seats": 400
              },
              {
                "session_id": uuid(),
                "session_time": 1490572800002,
                "left_seats": 166,
                "total_seats": 400
              },
              {
                "session_id": uuid(),
                "session_time": 1490572800003,
                "left_seats": 166,
                "total_seats": 400
              }
            ]
		},
		{
		  "movie_id": "08a3b257790a4b78a2268d611e8ff4c7",
		  "movie_version": "3D2",
		  "data_session": [
			{
			  "session_id": uuid(),
			  "session_time": 1490572800001,
			  "left_seats": 166,
			  "total_seats": 400
			},
			{
			  "session_id": uuid(),
			  "session_time": 1490572800002,
			  "left_seats": 166,
			  "total_seats": 400
			},
			{
			  "session_id": uuid(),
			  "session_time": 1490572800003,
			  "left_seats": 166,
			  "total_seats": 400
			}
		  ]
	  },
	  {
		"movie_id": "08a3b257790a4b78a2268d611e8ff4c7",
		"movie_version": "3D3",
		"data_session": [
		  {
			"session_id": uuid(),
			"session_time": 1490572800001,
			"left_seats": 166,
			"total_seats": 400
		  },
		  {
			"session_id": uuid(),
			"session_time": 1490572800002,
			"left_seats": 166,
			"total_seats": 400
		  },
		  {
			"session_id": uuid(),
			"session_time": 1490572800003,
			"left_seats": 166,
			"total_seats": 400
		  }
		]
	},
  //
  //  "movie_id": "08a3b257790a4b78a2268d611e8ff4c7",
  //  "movie_version": "3D4",
  //  "data_session": [
  // {
  //   "session_id": uuid(),
  //   "session_time": 1490572800001,
  //   "left_seats": 166,
  //   "total_seats": 400
  // },
  // {
  //   "session_id": uuid(),
  //   "session_time": 1490572800002,
  //   "left_seats": 166,
  //   "total_seats": 400
  // },
  // {
  //   "session_id": uuid(),
  //   "session_time": 1490572800003,
  //   "left_seats": 166,
  //   "total_seats": 400
  // }
  //  ]
  // },
  // {
  // movie_id": "08a3b257790a4b78a2268d611e8ff4c7",
  // movie_version": "3D5",
  // data_session": [
  //  {
  // "session_id": uuid(),
  // "session_time": 1490572800001,
  // "left_seats": 166,
  // "total_seats": 400
  //  },
  //  {
  // "session_id": uuid(),
  // "session_time": 1490572800002,
  // "left_seats": 166,
  // "total_seats": 400
  //  },
  //  {
  // "session_id": uuid(),
  // "session_time": 1490572800003,
  // "left_seats": 166,
  // "total_seats": 400
  //  }
  //
  // }
        ]
      },
      {
        "date": 1490716800000,
        "sdata": [
          {
            "movie_id": "afd170efdc544a9ea8e164c05a33511c",
            "movie_version": "數位",
            "data_session": [
              {
                "session_id": uuid(),
                "session_time": 1490572800001,
                "left_seats": 166,
                "total_seats": 400
              },
              {
                "session_id": uuid(),
                "session_time": 1490572800002,
                "left_seats": 166,
                "total_seats": 400
              },
              {
                "session_id": uuid(),
                "session_time": 1490572800003,
                "left_seats": 166,
                "total_seats": 400
              }
            ]
          },
          {
            "movie_id": "08a3b257790a4b78a2268d611e8ff4c7",
            "movie_version": "3D",
            "data_session": [
              {
                "session_id": uuid(),
                "session_time": 1490572800001,
                "left_seats": 166,
                "total_seats": 400
              },
            ]
          }
        ]
      },
      {
        "date": 1490803200000,
        "sdata": [
          {
            "movie_id": "afd170efdc544a9ea8e164c05a33511c",
            "movie_version": "數位",
            "data_session": [
              {
                "session_id": uuid(),
                "session_time": 1490572800001,
                "left_seats": 166,
                "total_seats": 400
              },
              {
                "session_id": uuid(),
                "session_time": 1490572800002,
                "left_seats": 166,
                "total_seats": 400
              },
            ]
          },
        ]
      }
    ]
  },
  "code": 200,
  "status": "success"
};

export const apiResult = {
  "result": {
    "total_pages": 3,
    "total_records": 30,
    "page": 1,
    "list": [
      {
		"date": 1492394074320,
        "sdata": [
	        {
	            "movie_version": "數位(MC)",
	            "session_id": uuid(),
	            "session_time": 1492443000000,
	            "left_seats": "266",
	            "total_seats": "400",
	            "cinema_code": "1002",
	            "cinema_id": "00001",
	            "cinema_name_cht": "台北美麗華大直影城",
	            "sort": 1
			},
			{
			  "movie_version": "IMAX3DPLUS",
			  "session_id": uuid(),
			  "session_time": 1492443000000,
			  "left_seats": "266",
			  "total_seats": "400",
			  "cinema_code": "1002",
			  "cinema_id": "00001",
			  "cinema_name_cht": "台北京站威秀",
			  "sort": 1
		    },
			{
				"movie_version": "數位(MC)",
				"session_id": uuid(),
				"session_time": 1492443000000,
				"left_seats": "266",
				"total_seats": "400",
				"cinema_code": "1002",
				"cinema_id": "00001",
				"cinema_name_cht": "台北美麗華大直影城",
				"sort": 1
			},
			{
			  "movie_version": "數位(MC)",
			  "session_id": uuid(),
			  "session_time": 1492443000000,
			  "left_seats": "266",
			  "total_seats": "400",
			  "cinema_code": "1002",
			  "cinema_id": "00001",
			  "cinema_name_cht": "台北美麗華大直影城",
			  "sort": 1
		  	},
			{
				"movie_version": "數位(MC)",
				"session_id": uuid(),
				"session_time": 1492443000000,
				"left_seats": "266",
				"total_seats": "400",
				"cinema_code": "1002",
				"cinema_id": "00001",
				"cinema_name_cht": "台北美麗華大直影城",
				"sort": 1
			},
			{
			  "movie_version": "數位(MC)",
			  "session_id": uuid(),
			  "session_time": 1492443000000,
			  "left_seats": "266",
			  "total_seats": "400",
			  "cinema_code": "1002",
			  "cinema_id": "00001",
			  "cinema_name_cht": "台北美麗華大直影城",
			  "sort": 1
			},
			{
			  "movie_version": "數位(MC)",
			  "session_id": uuid(),
			  "session_time": 1492443000000,
			  "left_seats": "266",
			  "total_seats": "400",
			  "cinema_code": "1002",
			  "cinema_id": "00001",
			  "cinema_name_cht": "台北美麗華大直影城",
			  "sort": 1
			},
			{
			  "movie_version": "數位(MC)",
			  "session_id": uuid(),
			  "session_time": 1492443000000,
			  "left_seats": "266",
			  "total_seats": "400",
			  "cinema_code": "1002",
			  "cinema_id": "00001",
			  "cinema_name_cht": "台北美麗華大直影城",
			  "sort": 1
			},
        ]
      },
      {
        "date": 1492522200000,
        "sdata": [
          {
			  "movie_version": "COACH",
            "session_id": "4b2df95b82e94321aeb18acdc72a9b448",
            "session_time": uuid(),
            "left_seats": "266",
            "total_seats": "400",
            "cinema_code": "1002",
            "cinema_id": "00001",
            "cinema_name_cht": "台北美麗華大直影城",
            "sort": 1
		},
		{
			"movie_version": "COACH",
		  "session_id": "4b2df95b82e94321aeb18acdc72a9b44",
		  "session_time": uuid(),
		  "left_seats": "266",
		  "total_seats": "400",
		  "cinema_code": "1002",
		  "cinema_id": "00001",
		  "cinema_name_cht": "台北美麗華大直影城",
		  "sort": 1
		}
        ]
	   },
		{
		  "date": 1492605000000,
		  "sdata": [
			{
			  "movie_version": "數位(MC)",
			  "session_id": "4b2df95b82e94321aeb18acdc72a9b44",
			  "session_time": uuid(),
			  "left_seats": "266",
			  "total_seats": "400",
			  "cinema_code": "1002",
			  "cinema_id": "00001",
			  "cinema_name_cht": "台北美麗華大直影城",
			  "sort": 1
			}
		  ]
	  	},
		{
			"date": 1492691400000,
			"sdata": [
			  {
				"movie_version": "GC",
				"session_id": uuid(),
				"session_time": 1492691400000,
				"left_seats": "266",
				"total_seats": "400",
				"cinema_code": "1002",
				"cinema_id": "00001",
				"cinema_name_cht": "台北美麗華大直影城",
				"sort": 1
			  }
			]
		},
		{
		  "date": 1492734600000,
		  "sdata": [
			{
			  "movie_version": "3DPLUS",
			  "session_id": uuid(),
			  "session_time": 1492734600000,
			  "left_seats": "266",
			  "total_seats": "400",
			  "cinema_code": "1002",
			  "cinema_id": "00001",
			  "cinema_name_cht": "台北美麗華大直影城",
			  "sort": 1
		  },
		  {
			"movie_version": "2DPLUS",
			"session_id": uuid(),
			"session_time": 1492834600000,
			"left_seats": "266",
			"total_seats": "400",
			"cinema_code": "1002",
			"cinema_id": "00001",
			"cinema_name_cht": "台北喜滿客",
			"sort": 1
		  }
		  ]
		},
    ]
  },
  "code": 200,
  "status": "success"
};

export const dateResult = [
	{
		"page": 1,
		"list": [
			{
				id: uuid(),
				weekday: "五",
				day: 29,
				month: 11
			},
			{
				id: uuid(),
				weekday: "六",
				day: 30,
				month: 11
			},
			{
				id: uuid(),
				weekday: "日",
				day: 1,
				month: 12
			},
			{
				id: uuid(),
				weekday: "一",
				day: 2,
				month: 12
			},
			{
				id: uuid(),
				weekday: "二",
				day: 3,
				month: 12
			}
		]
	},
	{
		"page": 2,
		"list": [
			{
				id: uuid(),
				weekday: "三",
				day: 4,
				month: 12
			},
			{
				id: uuid(),
				weekday: "四",
				day: 5,
				month: 12
			},
			{
				id: uuid(),
				weekday: "五",
				day: 6,
				month: 12
			},
			{
				id: uuid(),
				weekday: "六",
				day: 7,
				month: 12
			},
			{
				id: uuid(),
				weekday: "日",
				day: 8,
				month: 12
			}
		]
	},
	{
		"page": 3,
		"list": [
			{
				id: uuid(),
				weekday: "一",
				day: 9,
				month: 11
			},
			{
				id: uuid(),
				weekday: "二",
				day: 10,
				month: 11
			},
			{
				id: uuid(),
				weekday: "三",
				day: 11,
				month: 12
			},
			{
				id: uuid(),
				weekday: "四",
				day: 12,
				month: 12
			},
			{
				id: uuid(),
				weekday: "五",
				day: 13,
				month: 12
			}
		]
	}
];
