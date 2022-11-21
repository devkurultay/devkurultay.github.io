---
title: "Биринчи мини курултай"
---

## OpenSSH менен эмне кылса болот

<iframe width="560" height="315" src="https://www.youtube.com/embed/d8NfX6QwSdY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Сырсөз аркылуу аутентификациядан өтүү

    $ ssh user@example.com
    devkurultay@mycity.osmonov.com's password:

### Ачкыч аркылуу аутентификациядан өтүү

    $ ssh user@example.com
    Welcome to Ubuntu 18.04.1 LTS (GNU/Linux 4.15.0-29-generic x86_64)
    ...

Ачкычтарды жасоо

    $ ssh-keygen
    Generating public/private rsa key pair.
    Enter file in which to save the key (/home/devkurultay/.ssh/id_rsa):
    Enter passphrase (empty for no passphrase):
    Enter same passphrase again:
    Your identification has been saved in /home/devkurultay/.ssh/id_rsa.
    Your public key has been saved in /home/devkurultay/.ssh/id_rsa.pub.
    The key fingerprint is:
    SHA256:BUBXx3otQfrty1Y74SWsx7zQeyo37uRt7qinWET+Owo devkurultay@example
    The key's randomart image is:
    +---[RSA 2048]----+
    |     .o.o..oo    |
    |       . . oo    |
    |          o..o   |
    |         ..+o..  |
    |        S  .+o.  |
    |           . +o.o|
    |          E o+*o+|
    |           +o=XXo|
    |          . +%%X=|
    +----[SHA256]-----+

Ачкычты сырсөз менен сактаса болот

`Enter passphrase (empty for no passphrase):` жана `Enter same passphrase again:` деген жерге сырсөздү жазгыла.


### OpenSSH аркылуу файлдарды көчүрүү

Локалдык компьютерден серверге файлдарды жүктөө

    scp localfile devkurultay@mycity.osmonov.com:./

Серверден локалдык компьютерге файлды ташып алуу

    scp devkurultay@mycity.osmonov.com:./server_file ./


### OpenSSH аркылуу sFTP серверди колдонуу

FTP клиенттер sftp протоколун колдойт. Мисалы, FileZilla.

### Port forwarding

#### Каалаган TCP портту алыскы серверге туннель аркылуу багыттоо мүмкүн
 
    ssh -R 8000:localhost:8000 devkurultay@mycity.osmonov.com

Демейки боюнча локалдык интерфейстерге гана (127.0.0.1, ::1) туннель ачылат.
Башка интерфейстерге туннель ачыш үчүн SSH сервердин конфигдеринде бул конфиг болуш керек `GatewayPorts yes`

#### Алыскы серверденги TCP портту локалдык компьютерге багыттоо

    ssh -L 8080:localhost:8080 devkurultay@mycity.osmonov.com

#### Алыскы серверден локалдык компьютерди башкаруу (ssh back connect)

Локалдык компьютерде бул команданы иштетебиз.оо

    ssh -R 2222:localhost:22 devkurultay@mycity.osmonov.com

Алыскы серверде бул команда аркылуу локалдык компьютерге киребиз

    ssh -p 2222 localuser@localhost

### ssh-agent

Ачкыч сырсөз менен жабылганда, ар бир жолу сырсөздү жаза бербеш үчүн `ssh-add` аркылуу логин сессияда бир жолу гана сырсөздү жазса болот.
Сессиядан чыкканда сырсөз ssh-agent унутуп коет.

Сессиядан чыкпай ssh-agent тен сырсөздөрдү унуттуруш үчүн `ssh-add -D` командасын чакырыш керек.

`ssh-agent` тин сессиясын алыскы серверге жиберсе болот. Мисалы, алыскы серверде github.com-до жайгашкан репозиторийди клон кылыш керек.
Алыскы серверге жашыруун ачкычты жүктөө бул кооптуу, жүктөбөй туруп иштегенге `ssh-agent` мүмкүнчүлүк берет.
Ал үчүн `ssh -A user@remote` -A опция менен серверге кошулуу зарыл.
Же конфиг-файлга кийинкини кошуу -A опциясына барабар.

    Host example.com
      ForwardAgent yes

### Алиастар

Эгер хостнейм, юзернейм узун болсо, улам-улам аларды тере бербей, аларды алиас аркылуу кыскартса болот.
Мисалы, chokcholoibaatyr@tegirmenchilerdikinensinerbi.com деген юзернейм жана хостнейм болсун. Анда:

    Host tegirmen
      User chokcholoibaatyr
      HostName tegirmenchilerdikinensinerbi.com

деп `.ssh/config` файлга жазып койсок, `ssh tegirmen` алиас аркылуу серверге кире алабыз.
Ошондой эле, порт же ачкыч демейкидей болбосо, аларды да алиастын артына жашыртып койсо болот.

    Host tegirmen
      User chokcholoibaatyr
      HostName tegirmenchilerdikinensinerbi.com
      Port 2222
      IdentityFile ~/.ssh/id_rsa_tegirmenchi
