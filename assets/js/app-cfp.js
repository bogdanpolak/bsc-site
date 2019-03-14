function isValidEmail (email) {
	re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return this.re.test(email);
};

HTMLFormElement.prototype.asObject = function () {
	const dataArr = Array.from( (new FormData(this)).entries());
	const obj = dataArr.reduce(
		function(acc, item){ acc[item[0]]=item[1]; return acc; },
		{}
	);
	return obj;
};

const myModalWindow = {
	__prepare: function (modal, title, message, isDanger){
		const alert = modal.find('div.alert');
		const body = modal.find('.modal-body');
		if (isDanger) {
			alert.removeClass ('alert-success');
			alert.addClass ('alert-danger');
			body.removeClass ('text-success');
			body.addClass ('text-danger');
		} else {
			alert.removeClass ('alert-danger');
			alert.addClass ('alert-success');
			body.removeClass ('text-danger');
			body.addClass ('text-success');
		}
		modal.find('.modal-title').html(title);
		body.html(message);
	},

	showDanger: function (title, message){
		const div1 = $('#modalWindow');
		this.__prepare(div1,title,message,true);
		div1.modal();
	},

	showSuccess: function (title, message){
		const div1 = $('#modalWindow');
		this.__prepare(div1,title,message,false);
		div1.modal();
	}
}

const fillFormWithFakeData = {
	name: 'fillFormWithFakeData',

	samples: [
		{
			presenter : "",
			company : "",
			email : "",
			phone : "",
			bio : "",
			title : "",
			description : "",
			additional : ""
		}, {
			presenter : "Rowan Atkinson",
			company : "MrBean Ltd.",
			email : "mr.bean@bbc.co.uk",
			phone : "111-111-111",
			bio : "Ogólnie znany jako Pan Fasola, jest kustoszem londyńskiego muzeum, wcześniej pełnił rolę woźnego w tymże muzemu. Jest dziecinnym, oryginalnym i dającym się lubić błaznem, który często bierze udział w śmiesznych sytuacjach z powodu swojego talentu do destrukcji",
			title : "Nadciąga totalny kataklizm",
			description : "Prowadzący w zabawny sposób przedstawi jak skutecznie realizować odpowiedzialne zadania w warunkach wysokiego stresu, a wszczególności jak dbać o cenne dzieła sztuki. Jako historię sukcesu przedstawi sytuację obraz Matka Whistlera autorstwa Jamesa McNeill Whistlera wystawianego gościnnie w muzeum sztuki nowoczesnej w Los Angeles. Dowiecie się jak zachować zminą krew w niemal każdej sytuacji",
			additional : "Opowiem jak naprawiać zniszczone obrazy pod presją czasu. Przedstawię również kilka skutecznych trick-ów, takich jak wklejenie w orginał reprodukcji z plakatu. Odkryję również tajemnice jak wynieść cenny obraz z pilnie strzeżonego muzeum i zanieść go do domu, gdzie w spokoju można zająć się jego renowacją"
		}, {
			presenter: "Luke Skywalker",
			company: "JEDI Academy",
			email: "luke.skywalker@new-republic.com",
			phone: "600-600-600",
			bio: "Syn Anakina Skywalkera i królowej Naboo – Padme Amidali, bliźniaczy brat Lei. Urodził się w ośrodku medycznym w pasie asteroid Polis Massa, gdzie jego matka została ukryta przed Lordem Vaderem. Wychował się na planecie Tatooine u swoich wujostwa – Beru i Owena Larsów na farmie wilgoci. Dzięki swojej mocy pokonał Imperium i pomógł zlikwidować zagrożenie stworzone przez Nowy Porządek.",
			title: "Nowa Republika - strategie rozwoju",
			description: "W czasie sesji omówię jak na fali entuzjazmu po pokonaniu Imperium zostałem jednym z bohaterów Nowej Republiki. Jako pierwszy z nowego pokolenia Rycerzy Jedi miałem decydujący głos w wielu sprawach politycznych. Opowiem o strategiach doradzania kanlerzowi Mon Mothma oraz admirałowi Ackbara. Przeanalizuję wpływ na Nową Republikę uczniów imperatora Palpatine’a na przykładzie Lorda Jerekiego",
			additional: "Przedstawie techniki walki z Mrocznymi Jedi. Znaczenie i możliwości jakie daje absorpcja Mocy. W czasie sesji przećwiczymy zaawansowane techniki władania mieczem świetlnym. Zaproszę również uczestników to wstąpienia do założonej przez mnie Nowej Akademii Jedi."
		}, {
			presenter: "Rey",
			company: "Jakku Trash Masters",
			email: "rey@trmasters.jakku.com",
			phone: "1234-5678-90",
			bio: "Rey została osierocona przez rodziców i zostawiona na plancie Jakku. Przetrwała ponieważ wierzyła, że pewnego dnia rodzice wrócą po nią. Ta wiera dawała jej siłę, ale sama nie była świadoma, że oni już dawno nie żyją. Poznane osoby i roboty pozwoliły jej odzyskać pewność siebie i poznać ukrytą moc.",
			title: "Gdzie znaleść najcenniejszy złom w Galaktyce?",
			description: "Rey nauczyła się sztuki przetrwania, utrzymując się ze zbierania złomu. Stała się utalentowanym mechanikiem, pilotem i wojownikiem. Nie była świadoma sytuacji panującej w Galaktyce. W czasie wykładu dowiecie się jak zdemontowane komponenty z uszkodzonych maszyn można sprzedać z dużo większym zyskiem. Dzięki doświadczeniu Rey poznasz, które elementy zniszczonych statków kosmicznych, robotów i maszyn bojowych są najcenniejsze oraz jak ocenić ich stan i przydatność.",
			additional: "Opowiem też jak moje życie zmieniło spotkanie z droidem astromechanicznym BB-8. którego właścielem jest Poe Dameronem. Dlaczego warto, było go wesprzeć. Omówie również jak znaczenie w tej całej historii miał ex sztrumowiec Najwyższego Porządku Finna."
		}, {
			presenter : "Jabba Desilijic Tiure",
			company : "Hutt Syndicate",
			email : "jabba@hutt-syndicate.com",
			phone : "999-999-999",
			bio : "Znany jako Jabba the Hutt należy do rasy Huttów i zajmuje się działalnością przestępczą. Występował epizodycznie w części I i IV Gwiezdnych Wojen oraz jako ważna postać w części VI. Ma swoją siedzibę na Tatooine, skąd zarządza jedną z największych w Galaktyce syndykatów przestępczych, jego organizacja ustępuje jedynie Czarnemu Słońcu.",
			title : "Nowoczesne metody przemycania ładunków",
			description : "Jabba opowie jak wyszkolić przemytnika, do przemytu cennych i zakazanych ładunków (takich jak przyprawa z Kessel). Najwazniejszenie to nie porzucanie ładunku i pod żadnym pozorem nie korzystanie z możliwości ucieczki przed przedstawicielami Imperium. Dowiemy się jak żądać zwrotu kosztów w przypadku utraty ładunku.",
			additional : "Gdy przemytnik nie jest w stanie spłacić długu to trzeba wysłać jego śladem łowców nagród. Opowiem o kilku zaufanych łowcach takich jak Greedo i Boba Fett."
		}
	],

	options: {
		clean: 0,
		mrBean: 1,
		LukeSkywalker: 2,
		Ray: 3,
		Jabba: 4
	},

	currentOption: 0,

	init: function () {
		const me = this;
		$('#fillDataButton').on('click', function(event) {
			me.currentOption = (me.currentOption+1)%me.samples.length;
			event.preventDefault(); 
			var sample = me.samples[me.currentOption];
			for (var key in sample){
				if (sample.hasOwnProperty(key)) {
					document.getElementById(key).value = sample[key];
				}
			}
		}); 
	},

	fill: function(index) {
		if ( (index < 0) || (index >= this.samples.length ) ) {
			index = 0;
		}
		sample = this.samples[index];
		for (var key in sample){
			if (sample.hasOwnProperty(key)) {
				document.getElementById(key).value = sample[key];
			}
		}
	},

	clean: function () {
		this.fill(0);
	},

};

const callForPaperControler = {
	Name: 'callForPaperControler',

	formId: 'call-for-papers-form',
    divConfirmationId: 'confirmation-box',
    apiURL: 'https:/delphi.pl/zlot/zlot2019/api/test/cfp/',
	form: null,
	confirmBox: null,
	submitButton: null,
	
	animateToTop: function() {
		const ypos = $(this.form).offset().top;
		$('html, body').animate({scrollTop: ypos}, 500);				
	},

	showConfirmation: function(data) {
		// this.form.hide();
		// this.confirmBox.show();
		this.form.style.display = "none";
		this.confirmBox.style.display = "block";
		for (var key in data){
			if (data.hasOwnProperty(key)) {
				// TODO: map - member => out, ...
				document.getElementById('out-'+key).innerHTML = data[key];
			}
		}
	},

	setSubmitButtonCaption: function (version) {
		if (version === 0) {
			$(this.submitButton).find('span.default-submit').show();
			$(this.submitButton).find('span.busy-submit').hide();
		} else {
			$(this.submitButton).find('span.default-submit').hide();
			$(this.submitButton).find('span.busy-submit').show();
		}
	},

	onFormSubmit: function () {
		const isValid = this.form.checkValidity();
		this.form.classList.add('was-validated');
		if (isValid === false) {
			this.animateToTop();				
		} else {
			this.setSubmitButtonCaption(1);
			// TODO: use map form-field => member
			const data = this.form.asObject();
			AjaxHttpPut(this.apiURL, data,
				// onSuccess:
				(response) => {
					this.setSubmitButtonCaption(0);
					this.animateToTop();
					if (response.hasOwnProperty('hash')) {
						data['hash'] = response.hash;
					}
					this.showConfirmation(data);
				},
				// onFailure:
				(status,response) => {
					this.setSubmitButtonCaption(0);
					if (status>0) {
						myModalWindow.showDanger (
							'Błąd połączenia z serwerem danych',
							'<p>Podczas przekazywania danych rejestracyjnych wystąpił błąd<p><hr><h5>Status błędu:</h5><p>'+status+'</p><h5>Komunikat błędu:</h5><p>'+response+'</p>'
						);
					} else {
						myModalWindow.showDanger (
							'Niepoprawna odpowiedź serwera',
							'<p>Odpowiedź serwera niezgodna z formatem JSON.</p><h5>Komunikat serwera:</h5><p>'+response+'</p>'
						);
					}

				}
			);
		}
	},

	onClickSubmitNextSession: function() {
		$('#confirmation-box').hide();
		$(this.form).show();
		document.getElementById('title').value = '';
		document.getElementById('description').value = '';
		document.getElementById('additional').value = '';
	},

	init: function () {
		this.form = document.getElementById(this.formId);
		this.confirmBox = document.getElementById(this.divConfirmationId);
		this.submitButton =  $(this.form).find(':submit');
		const me = this;
		this.form.addEventListener('submit', (event) => {
			event.preventDefault();
			event.stopPropagation();
			me.onFormSubmit();
		});
		$('#confirmation-box button').on('click', (event) => {
			me.onClickSubmitNextSession();
		});
	},
};

const animateNavigation = {
	init: function () {
		$('#menu-buttons button[anim]').on('click', function() {
			var target = $(this.getAttribute('anim'));
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 500);
		});
	},
};

/*
 * ------------------------------------------------------------------
 * JavaScript Inittialization (onDomReady) self executing function
 * ------------------------------------------------------------------
 */

;
$( document ).ready(function() {
	fillFormWithFakeData.init();
	callForPaperControler.init();
	animateNavigation.init();
});
