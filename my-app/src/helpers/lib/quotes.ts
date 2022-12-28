interface IQuote {
	quote_eng : string;
	quote_arab : string;
}

interface IQuotes extends Array<IQuote> {
}

const quotes : IQuotes = [
	{
		quote_eng : 'I Want To Stab You To Death And Play Around With Your Blood.',
		quote_arab : 'أريد أن أطعنك حتى الموت وألعب بدمك.'
	},
	{
		quote_eng : 'There Is An Idea Of Patrick Bateman.',
		quote_arab : 'هناك فكرة لباتريك بيتمان.'
	},
	{
		quote_eng : 'You Like Huey Lewis And The News?',
		quote_arab : 'هل تحب هيوي لويس والأخبار؟'
	},
	{
		quote_eng : 'Let\'s See Paul Allen\'s Card.',
		quote_arab : 'دعونا نرى بطاقة بول ألين.'
	},
	{
		quote_eng : 'Hey Paul! Try Getting A Reservation At Dorsia Now!',
		quote_arab : 'مرحبا بول! جرب الحصول على حجز في Dorsia الآن!'
	},
	{
		quote_eng : 'It Even Has A Watermark.',
		quote_arab : 'حتى أنه يحتوي على علامة مائية.'
	},
	{
		quote_eng : 'I Need To Engage In Homicidal Behavior on A Massive Scale.',
		quote_arab : 'أنا بحاجة إلى الانخراط في السلوك القاتل على نطاق واسع.'
	},
	{
		quote_eng : 'I\'ve Killed A Lot Of People.',
		quote_arab : 'لقد قتلت الكثير من الناس.'
	},
	{
		quote_eng : 'I’m Into Murders And Executions Mostly.',
		quote_arab : 'أنا أرتكب جرائم قتل وإعدامات في الغالب.'
	},
	{
		quote_eng : 'I Think My Mask Of Sanity Is About To Slip.',
		quote_arab : 'أعتقد أن قناع التعقل الخاص بي على وشك الانزلاق.'
	},
	{
		quote_eng : 'My Pain Is Constant And Sharp, And I Do Not Wish For A Better World For Anyone.',
		quote_arab : 'ألمي ثابت وحاد ، ولا أرغب في عالم أفضل لأي شخص.'
	},
	{
		quote_eng : 'I Have To Return Some Videotapes.',
		quote_arab : 'على إرجاع بعض أشرطة الفيديو.'
	},
	{
		quote_eng : 'This Confession Has Meant Nothing.',
		quote_arab : 'وهذا الاعتراف لا يعني شيئا.'
	},
	{
		quote_eng : 'I Simply Am Not There.',
		quote_arab : 'أنا ببساطة لست هناك.'
	}
];

export default quotes;