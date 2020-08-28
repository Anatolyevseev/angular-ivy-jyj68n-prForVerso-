import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 myimage1:string ="{{tit.image}}"

  onClick(tit){
    this.router.navigate(['desc',tit.description]);
    
  }

  constructor(private router:Router) { }

  ngOnInit() {
   
  }
jsonArray =  [  {
        
        "id": "2d079217-9d23-4fb5-b392-b0fcaaa5c4f0",

        "title": "Brigantiaea Lichen",

        "description": "Triple-buffered 6th generation paradigm",

        "body": "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",

        "thumbnail": "http://dummyimage.com/100x100.png/ff4444/ffffff",

        "image": "http://dummyimage.com/400x250.png/ff4444/ffffff",

        "views": 2610,

        "favorites": 553,

        "author": "rfielden3",

        "posted": "10/07/1996"
          
        
    },

    {

        "id": "0c7afacf-4696-4d3b-b67d-26f5c78779b3",

        "title": "Sticky Whiteleaf Manzanita",

        "description": "Proactive didactic data-warehouse",

        "body": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",

        "thumbnail": "http://dummyimage.com/100x100.png/cc0000/ffffff",

        "image": "http://dummyimage.com/400x250.png/cc0000/ffffff",

        "views": 2936,

        "favorites": 699,

        "author": "hroller4",

        "posted": "09/08/2011"

    },

    {

        "id": "efeb6413-dcb5-41af-8475-616ce9dbd099",

        "title": "Tree Mallow",

        "description": "Customizable value-added focus group",

        "body": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",

        "thumbnail": "http://dummyimage.com/100x100.png/cc0000/ffffff",

        "image": "http://dummyimage.com/400x250.png/ff4444/ffffff",

        "views": 1428,

        "favorites": 429,

        "author": "bklezmski5",

        "posted": "06/11/1999"

    },

    {

        "id": "d6836d4c-1a92-455d-bdd0-ade1c981e5b3",

        "title": "Fragrant Plantain Lily",

        "description": "User-friendly dynamic throughput",

        "body": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",

        "thumbnail": "http://dummyimage.com/100x100.png/dddddd/000000",

        "image": "http://dummyimage.com/400x250.png/5fa2dd/ffffff",

        "views": 1688,

        "favorites": 381,

        "author": "solivo6",

        "posted": "01/24/2014"
    
    },

    {

        "id": "7a8d4eba-9f80-48ef-a680-1b4591dfd5ec",

        "title": "Gray Bottlebrush",

        "description": "Profit-focused coherent emulation",

        "body": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",

        "thumbnail": "http://dummyimage.com/100x100.png/ff4444/ffffff",

        "image": "http://dummyimage.com/400x250.png/5fa2dd/ffffff",

        "views": 1350,

        "favorites": 896,

        "author": "ljenkinson7",

        "posted": "08/20/2013"

    },

    {

        "id": "b19f7e4e-b7fe-4e7f-87ea-919304f9d89f",

        "title": "Redtop Panicgrass",

        "description": "Automated intangible parallelism",

        "body": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",

        "thumbnail": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",

        "image": "http://dummyimage.com/400x250.png/cc0000/ffffff",

        "views": 273,

        "favorites": 282,

        "author": "iainge8",

        "posted": "09/24/1996"

    },

    {

        "id": "123f39e6-8c5f-4a28-9e22-2e346c589dae",

        "title": "Bristle Berry",

        "description": "Front-line homogeneous algorithm",

        "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",

        "thumbnail": "http://dummyimage.com/100x100.png/cc0000/ffffff",

        "image": "http://dummyimage.com/400x250.png/ff4444/ffffff",

        "views": 1019,

        "favorites": 87,

        "author": "draison9",

        "posted": "10/01/2017"

    },

    {

        "id": "528e1ddf-919a-40fa-9f43-117819f3e72c",

        "title": "Yellow Marsh Marigold",

        "description": "Right-sized bandwidth-monitored archive",

        "body": "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",

        "thumbnail": "http://dummyimage.com/100x100.png/dddddd/000000",

        "image": "http://dummyimage.com/400x250.png/5fa2dd/ffffff",

        "views": 164,

        "favorites": 172,

        "author": "mdanilovitcha",

        "posted": "06/12/1997"

    },

    {

        "id": "2e5ec3bb-09e4-4fcf-be60-b4ac035789c7",

        "title": "Griffiths' Saltbush",

        "description": "Balanced disintermediate neural-net",

        "body": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",

        "thumbnail": "http://dummyimage.com/100x100.png/dddddd/000000",

        "image": "http://dummyimage.com/400x250.png/5fa2dd/ffffff",

        "views": 2851,

        "favorites": 511,

        "author": "dvirrb",

        "posted": "06/19/2007"

    },

    {

        "id": "4cfb522e-7286-4eef-ac69-50f06f19cdb9",

        "title": "Purple Locoweed",

        "description": "Business-focused bottom-line circuit",

        "body": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",

        "thumbnail": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",

        "image": "http://dummyimage.com/400x250.png/5fa2dd/ffffff",

        "views": 552,

        "favorites": 184,

        "author": "dlusgdinc",

        "posted": "02/13/2010"

    }

]

}


