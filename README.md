# Bot Oluşturma
Discord Developer Portal'a gidin ve giriş yapın.
Sağ üst köşede bulunan "Yeni Uygulama" veya benzeri bir düğmeye tıklayarak yeni bir uygulama oluşturun. Uygulamaya bir ad verin.
Sol menüden "Bot" sekmesine tıklayın ve "Botu Ekle" düğmesine basarak bir bot oluşturun.
Botunuzun adını ve avatarını yapılandırabilirsiniz.
Token'ı kopyalayın. Bu token, botunuzun kimlik doğrulama bilgisidir ve güvenli bir şekilde saklanmalıdır.

# Botu Sunucuya Ekleme

Botunuzu sunucuya eklemek için, "OAuth2" sekmesine geçin.
"OAuth2 URL Oluşturucu" bölümünde "Scopes" kısmından "bot" seçeneğini işaretleyin.
İzinlerinizi belirlemek için "Bot İzinleri" bölümünden gerekli izinleri seçin (örneğin, "Mesajları Oku" ve "Mesaj Gönder").
Oluşturulan URL'i kopyalayın ve tarayıcıda açın. Bu URL, botunuzu seçtiğiniz sunucuya eklemenize yardımcı olacaktır.

# Bot Komutları
Projede bulabilirsiniz.

# Bot Kurulumu
Aşağıdaki komutu kullanarak Discord.js'i yükleyin:
```shell
npm install discord.js
```
Klasörün içinde yeni bir dosya oluşturun ve bu dosyaya "bot.js" veya istediğiniz bir isim verin.
Terminali açın ve bot dosyasının bulunduğu klasöre gidin.
Botu çalıştırmak için aşağıdaki komutu kullanın:
```shell
node bot.js
```
