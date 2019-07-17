var HashTable = require('../src/hashtable');

test('HashTable', function() {
    var hashtable = new HashTable();

    hashtable.put('zhangsan', 'zhangsan@email.com');
    hashtable.put('lisi', 'lisi@email.com');

    expect(hashtable.get('zhangsan')).toBe('zhangsan@email.com');
    expect(hashtable.get('lisi')).toBe('lisi@email.com');

    hashtable.remove('zhangsan');
    expect(hashtable.get('zhangsan')).toBe(undefined);
    
});
