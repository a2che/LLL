
'use strict'

const userProgress = [{
    user_name: '', 
    user_patronymic: '',
    user_surname: '',
    user_company: 'ООО «Шнейдер Электрик»',
    user_phone: '+7 900 900 00 00',
    user_email: '',
    user_country: 'Россия', 
    user_avatar: 'img/big__user.jpg'
}]
const renderProgressElement = (item) => `
<div class="wrapper__login__foto">
                    
                    <button class="btn-user__foto">

                        <img src="${item.user_avatar}" alt="">
                        <p class="user__foto__text">Загрузить фото</p>
                        <div class="bg-fon"></div>
                    </button>
                </div>
                <div class="wrapper__login__name">
                    <div class="wrapper__login__input">
                        <p class="ru">Имя*</p><p class="en">First name* </p><input type="text" placeholder="Владислав" value="${item.user_name}">
                    </div>
                    <div class="wrapper__login__input">
                        <p class="ru">Отчество</p><p class="en">Middle name</p><input type="text"  value="${item.user_patronymic}">
                    </div>
                    <div class="wrapper__login__input">
                        <p class="ru">Фамилия*</p><p class="en">Last name*</p><input type="text" placeholder="Шубин" value="${item.user_surname}">
                    </div>
                    <div class="wrapper__login__input">
                        <p>E-mail*</p><input type="text" placeholder="shubin@se.com" value="${item.user_email}">
                    </div>
                    <div class="wrapper__login__input">
                        <p class="ru">Телефон</p><p class="en">Telephone</p><input type="text" placeholder="+7 985 690-50-91" value="${item.user_phone}">
                    </div>
                    <div class="wrapper__login__input">
                        <p class="ru">Компания</p><p class="en">Company</p><input type="text" placeholder="АО Шнейдер Электрик" value="${item.user_company}">
                    </div>
                    <div class="wrapper__login__input">
                        <p class="ru">Страна</p><p class="en">Country</p>
                        <select class="form-control" id="select" >
                            <option value="AX">AALAND ISLANDS</option>
                            <option value="AF">AFGHANISTAN</option>
                            <option value="AL">ALBANIA</option>
                            <option value="DZ">ALGERIA</option>
                            <option value="AS">AMERICAN SAMOA</option>
                            <option value="AD">ANDORRA</option>
                            <option value="AO">ANGOLA</option>
                            <option value="AI">ANGUILLA</option>
                            <option value="AQ">ANTARCTICA</option>
                            <option value="AG">ANTIGUA AND BARBUDA</option>
                            <option value="AR">ARGENTINA</option>
                            <option value="AM">ARMENIA</option>
                            <option value="AW">ARUBA</option>
                            <option value="AU">AUSTRALIA</option>
                            <option value="AT">AUSTRIA</option>
                            <option value="AZ">AZERBAIJAN</option>
                            <option value="BS">BAHAMAS</option>
                            <option value="BH">BAHRAIN</option>
                            <option value="BD">BANGLADESH</option>
                            <option value="BB">BARBADOS</option>
                            <option value="BY">BELARUS</option>
                            <option value="BE">BELGIUM</option>
                            <option value="BZ">BELIZE</option>
                            <option value="BJ">BENIN</option>
                            <option value="BM">BERMUDA</option>
                            <option value="BT">BHUTAN</option>
                            <option value="BO">BOLIVIA</option>
                            <option value="BA">BOSNIA AND HERZEGOWINA</option>
                            <option value="BW">BOTSWANA</option>
                            <option value="BV">BOUVET ISLAND</option>
                            <option value="BR">BRAZIL</option>
                            <option value="IO">BRITISH INDIAN OCEAN TERRITORY</option>
                            <option value="BN">BRUNEI DARUSSALAM</option>
                            <option value="BG">BULGARIA</option>
                            <option value="BF">BURKINA FASO</option>
                            <option value="BI">BURUNDI</option>
                            <option value="KH">CAMBODIA</option>
                            <option value="CM">CAMEROON</option>
                            <option value="CA">CANADA</option>
                            <option value="CV">CAPE VERDE</option>
                            <option value="KY">CAYMAN ISLANDS</option>
                            <option value="CF">CENTRAL AFRICAN REPUBLIC</option>
                            <option value="TD">CHAD</option>
                            <option value="CL">CHILE</option>
                            <option value="CN">CHINA</option>
                            <option value="CX">CHRISTMAS ISLAND</option>
                            <option value="CO">COLOMBIA</option>
                            <option value="KM">COMOROS</option>
                            <option value="CK">COOK ISLANDS</option>
                            <option value="CR">COSTA RICA</option>
                            <option value="CI">COTE D'IVOIRE</option>
                            <option value="CU">CUBA</option>
                            <option value="CY">CYPRUS</option>
                            <option value="CZ">CZECH REPUBLIC</option>
                            <option value="DK">DENMARK</option>
                            <option value="DJ">DJIBOUTI</option>
                            <option value="DM">DOMINICA</option>
                            <option value="DO">DOMINICAN REPUBLIC</option>
                            <option value="EC">ECUADOR</option>
                            <option value="EG">EGYPT</option>
                            <option value="SV">EL SALVADOR</option>
                            <option value="GQ">EQUATORIAL GUINEA</option>
                            <option value="ER">ERITREA</option>
                            <option value="EE">ESTONIA</option>
                            <option value="ET">ETHIOPIA</option>
                            <option value="FO">FAROE ISLANDS</option>
                            <option value="FJ">FIJI</option>
                            <option value="FI">FINLAND</option>
                            <option value="FR">FRANCE</option>
                            <option value="GF">FRENCH GUIANA</option>
                            <option value="PF">FRENCH POLYNESIA</option>
                            <option value="TF">FRENCH SOUTHERN TERRITORIES</option>
                            <option value="GA">GABON</option>
                            <option value="GM">GAMBIA</option>
                            <option value="GE">GEORGIA</option>
                            <option value="DE">GERMANY</option>
                            <option value="GH">GHANA</option>
                            <option value="GI">GIBRALTAR</option>
                            <option value="GR">GREECE</option>
                            <option value="GL">GREENLAND</option>
                            <option value="GD">GRENADA</option>
                            <option value="GP">GUADELOUPE</option>
                            <option value="GU">GUAM</option>
                            <option value="GT">GUATEMALA</option>
                            <option value="GN">GUINEA</option>
                            <option value="GW">GUINEA-BISSAU</option>
                            <option value="GY">GUYANA</option>
                            <option value="HT">HAITI</option>
                            <option value="HM">HEARD AND MC DONALD ISLANDS</option>
                            <option value="HN">HONDURAS</option>
                            <option value="HK">HONG KONG</option>
                            <option value="HU">HUNGARY</option>
                            <option value="IS">ICELAND</option>
                            <option value="IN">INDIA</option>
                            <option value="ID">INDONESIA</option>
                            <option value="IQ">IRAQ</option>
                            <option value="IE">IRELAND</option>
                            <option value="IL">ISRAEL</option>
                            <option value="IT">ITALY</option>
                            <option value="JM">JAMAICA</option>
                            <option value="JP">JAPAN</option>
                            <option value="JO">JORDAN</option>
                            <option value="KZ">KAZAKHSTAN</option>
                            <option value="KE">KENYA</option>
                            <option value="KI">KIRIBATI</option>
                            <option value="KW">KUWAIT</option>
                            <option value="KG">KYRGYZSTAN</option>
                            <option value="LA">LAO PEOPLE'S DEMOCRATIC REPUBLIC</option>
                            <option value="LV">LATVIA</option>
                            <option value="LB">LEBANON</option>
                            <option value="LS">LESOTHO</option>
                            <option value="LR">LIBERIA</option>
                            <option value="LY">LIBYAN ARAB JAMAHIRIYA</option>
                            <option value="LI">LIECHTENSTEIN</option>
                            <option value="LT">LITHUANIA</option>
                            <option value="LU">LUXEMBOURG</option>
                            <option value="MO">MACAU</option>
                            <option value="MG">MADAGASCAR</option>
                            <option value="MW">MALAWI</option>
                            <option value="MY">MALAYSIA</option>
                            <option value="MV">MALDIVES</option>
                            <option value="ML">MALI</option>
                            <option value="MT">MALTA</option>
                            <option value="MH">MARSHALL ISLANDS</option>
                            <option value="MQ">MARTINIQUE</option>
                            <option value="MR">MAURITANIA</option>
                            <option value="MU">MAURITIUS</option>
                            <option value="YT">MAYOTTE</option>
                            <option value="MX">MEXICO</option>
                            <option value="MC">MONACO</option>
                            <option value="MN">MONGOLIA</option>
                            <option value="MS">MONTSERRAT</option>
                            <option value="MA">MOROCCO</option>
                            <option value="MZ">MOZAMBIQUE</option>
                            <option value="MM">MYANMAR</option>
                            <option value="NA">NAMIBIA</option>
                            <option value="NR">NAURU</option>
                            <option value="NP">NEPAL</option>
                            <option value="NL">NETHERLANDS</option>
                            <option value="AN">NETHERLANDS ANTILLES</option>
                            <option value="NC">NEW CALEDONIA</option>
                            <option value="NZ">NEW ZEALAND</option>
                            <option value="NI">NICARAGUA</option>
                            <option value="NE">NIGER</option>
                            <option value="NG">NIGERIA</option>
                            <option value="NU">NIUE</option>
                            <option value="NF">NORFOLK ISLAND</option>
                            <option value="MP">NORTHERN MARIANA ISLANDS</option>
                            <option value="NO">NORWAY</option>
                            <option value="OM">OMAN</option>
                            <option value="PK">PAKISTAN</option>
                            <option value="PW">PALAU</option>
                            <option value="PA">PANAMA</option>
                            <option value="PG">PAPUA NEW GUINEA</option>
                            <option value="PY">PARAGUAY</option>
                            <option value="PE">PERU</option>
                            <option value="PH">PHILIPPINES</option>
                            <option value="PN">PITCAIRN</option>
                            <option value="PL">POLAND</option>
                            <option value="PT">PORTUGAL</option>
                            <option value="PR">PUERTO RICO</option>
                            <option value="QA">QATAR</option>
                            <option value="RE">REUNION</option>
                            <option value="RO">ROMANIA</option>
                            <option selected value="RU">RUSSIAN FEDERATION</option>
                            <option value="RW">RWANDA</option>
                            <option value="SH">SAINT HELENA</option>
                            <option value="KN">SAINT KITTS AND NEVIS</option>
                            <option value="LC">SAINT LUCIA</option>
                            <option value="PM">SAINT PIERRE AND MIQUELON</option>
                            <option value="VC">SAINT VINCENT AND THE GRENADINES</option>
                            <option value="WS">SAMOA</option>
                            <option value="SM">SAN MARINO</option>
                            <option value="ST">SAO TOME AND PRINCIPE</option>
                            <option value="SA">SAUDI ARABIA</option>
                            <option value="SN">SENEGAL</option>
                            <option value="CS">SERBIA AND MONTENEGRO</option>
                            <option value="SC">SEYCHELLES</option>
                            <option value="SL">SIERRA LEONE</option>
                            <option value="SG">SINGAPORE</option>
                            <option value="SK">SLOVAKIA</option>
                            <option value="SI">SLOVENIA</option>
                            <option value="SB">SOLOMON ISLANDS</option>
                            <option value="SO">SOMALIA</option>
                            <option value="ZA">SOUTH AFRICA</option>
                            <option value="GS">SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS</option>
                            <option value="ES">SPAIN</option>
                            <option value="LK">SRI LANKA</option>
                            <option value="SD">SUDAN</option>
                            <option value="SR">SURINAME</option>
                            <option value="SJ">SVALBARD AND JAN MAYEN ISLANDS</option>
                            <option value="SZ">SWAZILAND</option>
                            <option value="SE">SWEDEN</option>
                            <option value="CH">SWITZERLAND</option>
                            <option value="SY">SYRIAN ARAB REPUBLIC</option>
                            <option value="TW">TAIWAN</option>
                            <option value="TJ">TAJIKISTAN</option>
                            <option value="TH">THAILAND</option>
                            <option value="TL">TIMOR-LESTE</option>
                            <option value="TG">TOGO</option>
                            <option value="TK">TOKELAU</option>
                            <option value="TO">TONGA</option>
                            <option value="TT">TRINIDAD AND TOBAGO</option>
                            <option value="TN">TUNISIA</option>
                            <option value="TR">TURKEY</option>
                            <option value="TM">TURKMENISTAN</option>
                            <option value="TC">TURKS AND CAICOS ISLANDS</option>
                            <option value="TV">TUVALU</option>
                            <option value="UG">UGANDA</option>
                            <option value="UA">UKRAINE</option>
                            <option value="AE">UNITED ARAB EMIRATES</option>
                            <option value="GB">UNITED KINGDOM</option>
                            <option value="US">UNITED STATES</option>
                            <option value="UM">UNITED STATES MINOR OUTLYING ISLANDS</option>
                            <option value="UY">URUGUAY</option>
                            <option value="UZ">UZBEKISTAN</option>
                            <option value="VU">VANUATU</option>
                            <option value="VE">VENEZUELA</option>
                            <option value="VN">VIET NAM</option>
                            <option value="WF">WALLIS AND FUTUNA ISLANDS</option>
                            <option value="EH">WESTERN SAHARA</option>
                            <option value="YE">YEMEN</option>
                            <option value="ZM">ZAMBIA</option>
                            <option value="ZW">ZIMBABWE</option>
                        </select>
                    </div>
                    <div class="saveChangeBtn">
                        <p class="ru">Сохранить изменения</p>
                        <p class="en">Save changes</p>
                    </div>
                    <div class="btn btn-login">
                        <p class="ru">Изменить имя и пароль</p>
                        <p class="en">Change username and password</p>
                    </div>
                </div>
         
       `
const renderProgressElements = (list) => {
    document.querySelector('.wrapper__login').insertAdjacentHTML('afterbegin', list.map(item => renderProgressElement(item)).join(''))
}
renderProgressElements(userProgress)
