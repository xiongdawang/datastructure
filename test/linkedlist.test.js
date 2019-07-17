var LinkedList = require('../src/linkedlist');

test('LinkedList', function() {
    var linkedlist = new LinkedList();

    linkedlist.append(15);
    linkedlist.append(10);
    expect(linkedlist.toString()).toBe('15,10');
    expect(linkedlist.removeAt(-1)).toBe(null);
    expect(linkedlist.removeAt(3)).toBe(null);
    expect(linkedlist.removeAt(1)).toBe(10);
    expect(linkedlist.removeAt(0)).toBe(15);
    expect(linkedlist.toString()).toBe('');
    expect(linkedlist.insert(0, 15));
    expect(linkedlist.insert(1, 12));
    expect(linkedlist.insert(0, 10));
    expect(linkedlist.insert(-1, 8));
    expect(linkedlist.insert(4, 8));
    expect(linkedlist.toString()).toBe('10,15,12');
    expect(linkedlist.indexOf(12)).toBe(2);
    expect(linkedlist.indexOf(8)).toBe(-1);
    expect(linkedlist.remove(12)).toBe(12);
    expect(linkedlist.remove(10)).toBe(10);
    expect(linkedlist.isEmpty()).toBeFalsy();
    expect(linkedlist.size()).toBe(1);
    expect(linkedlist.getHead()).toEqual({element: 15, next: null});
});
