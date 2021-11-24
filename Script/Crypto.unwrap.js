try
{
	var $2B00000001 = {
		profileVersion : "2.0.0",
		objVersion     : "2.0.1",
		profileOID     : "2B00000001",
		profileID      : "0000000001",
		owner          : "GloablPlatform",
		type           : Key.SECRET,
		subType        : Key.DES,
		size           : 128,
		usage          : 0 | Key.ENCRYPT | Key.DECRYPT | Key.DECRYPT_ENCRYPT | Key.UNWRAP | Key.WRAP | Key.UNWRAP_WRAP | Key.SIGN | Key.VERIFY | Key.DERIVE,
		attribute      : 0 | Key.EXPORTABLE | Key.IMPORTABLE
	};

	var $2B00000002 = {
		profileVersion : "2.0.0",
		objVersion     : "2.0.1",
		profileOID     : "2B00000002",
		profileID      : "0000000002",
		owner          : "GloablPlatform",
		type           : Key.SECRET,
		subType        : Key.DES,
		size           : 128,
		usage          : 0 | Key.ENCRYPT | Key.DECRYPT | Key.DECRYPT_ENCRYPT | Key.UNWRAP | Key.WRAP | Key.UNWRAP_WRAP | Key.SIGN | Key.VERIFY | Key.DERIVE,
		attribute      : 0 | Key.EXPORTABLE | Key.IMPORTABLE | Key.SENSITIVE
	};

	var key01 = new Key($2B00000001);
	var key02 = new Key($2B00000002);

	key01.setComponent(Key.DES,new ByteString("00112233445566778899AABBCCDDEEFF",HEX));
	key02.setComponent(Key.DES,new ByteString("F4DCEA6B36902B8AF4DCEA6B36902B8A",HEX));

	key02.setWrapKey(key01,Crypto.DES_ECB);

	//Instantiate crypto service
	var crypto = new Crypto();

	pk = new Key($2B00000002);
	crypto.unwrap(key02,pk);
	Print("key02 unwrap key add is : " + pk.getAdd());
	Print("key02 unwrap key component is : " + pk.getComponent(Key.DES).toString(HEX));
}
catch (e)
{
	Print("Exception : " + e.className + "," + e.error + "," + e.reason + "," + e.message);
}
