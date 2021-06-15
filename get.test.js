const app = require('./index.js');
const supertest = require('supertest');
const request = supertest(app);

const kpop = 
[
    {
        "id": 1,
        "name": "BTS",
        "gender": "Male",
        "members": 7,
        "members_changed": false,
        "label": "BHE",
        "fanbase_name": "ARMY",
        "symbol": "Two symmetrical trapezoidal doors",
        "newest_release": "Butter",
        "biggest_hit": "Dynamite",
        "debut_year": 2013,
        "debut_song": "No More Dream",
        "color_1": "#000000",
        "color_2": "#FFFFFF",
    },
    {
        "id": 2,
        "name": "Mamamoo",
        "gender": "Female",
        "members": 4,
        "members_changed": false,
        "label": "RBW",
        "fanbase_name": "Moomoos",
        "symbol": "Radish",
        "newest_release": "Where Are We Now",
        "biggest_hit": "Hip",
        "debut_year": 2014,
        "debut_song": "Mr. Ambiguous",
        "color_1": "#bdFF00",
        "color_2": "#000000",
    },
    {
        "id": 3,
        "name": "BlackPink",
        "gender": "Female",
        "members": 4,
        "members_changed": false,
        "label": "YG",
        "fanbase_name": "Blinks",
        "symbol": "Squeaky hammer",
        "newest_release": "Lovesick Girls",
        "biggest_hit": "Kill This Love",
        "debut_year": 2016,
        "debut_song": "Whistle",
        "color_1": "#FF76d8",
        "color_2": "#000000",
    },
    {
        "id": 4,
        "name": "(G)I-dle",
        "gender": "Female",
        "members": 6,
        "members_changed": true,
        "label": "Cube",
        "fanbase_name": "Neverland",
        "symbol": "The letter 'i', with sideways 'dle' in hangeul",
        "newest_release": "Hwaa",
        "biggest_hit": "Oh My God",
        "debut_year": 2018,
        "debut_song": "Latata",
        "color_1": "#7e00bf",
        "color_2": "#e11900",
    },
    {
        "id": 5,
        "name": "SHINEE",
        "gender": "Male",
        "members": 4,
        "members_changed": true,
        "label": "SM",
        "fanbase_name": "Shawol",
        "symbol": "Diamond",
        "newest_release": "Atlantis",
        "biggest_hit": "Lucifer",
        "debut_year": 2008,
        "debut_song": "Noona Neomu Yeppeo (Replay)",
        "color_1": "#88d8c0",
        "color_2": "#79e5cb",
    }
]

const bts = 
    {
        "id": 1,
        "name": "BTS",
        "gender": "Male",
        "members": 7,
        "members_changed": false,
        "label": "BHE",
        "fanbase_name": "ARMY",
        "symbol": "Two symmetrical trapezoidal doors",
        "newest_release": "Butter",
        "biggest_hit": "Dynamite",
        "debut_year": 2013,
        "debut_song": "No More Dream",
        "color_1": "#000000",
        "color_2": "#FFFFFF",
    };

it('kpop responds with all kpop data', async(done) => {
    const response = await request.get('/kpop');

    expect(response.body).toEqual(kpop);
    done();
});

it('kpop/:id responds with one kpop group', async(done) => {
    const response = await request.get('/kpop/1');

    expect(response.body).toEqual(bts);
    done();
});