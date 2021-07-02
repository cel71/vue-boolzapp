
new Vue (
    {
        el: "#app",
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
            indexAvatar: 0,
            newFooterMessages: "",
            navbarSidebarSearch: "",
            messaggioInviato: "fumetto-verde",
            messaggioRicevuto: "fumetto-bianco",
        },
        methods: {
            clickIndexAvatar: function (index) {
                this.indexAvatar = index;
            },
            footerNewMessages: function () {
                let newText = {
                    date: this.date(),
                    text: this.newFooterMessages,
                    status: "sent",
                };
                this.contacts[this.indexAvatar].messages.push(newText);
                this.newFooterMessages = "";
                setTimeout(() => {
                    this.contacts[this.indexAvatar].messages.push({
                        date: this.date(),
                        text: "Ok",
                        status: "received",
                    });
                }, 1000)
            },
            date: function () {
                const time = dayjs();
                return time.format("DD/MM/YYYY HH:mm:ss");
            },
            sidebarSearch: function () {
                this.contacts.forEach((element) => {
                    let newName = element.name.toLowerCase();
                    let search = this.navbarSidebarSearch.toLowerCase();
                    if(newName.includes(search)) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    }
                });
            },
        }
    }
);