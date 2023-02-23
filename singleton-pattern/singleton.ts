class Singleton {
    private static INSTANCE: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.INSTANCE) {
            Singleton.INSTANCE = new Singleton();
        }
        return Singleton.INSTANCE;
    }
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

if (s1 === s2 ){
    console.log('s1, s2 same instance.');
} else {
    console.log('s1, s2 different instance.');
}
