# Copyright (C) 2010 Samuel Abels.
#
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License version 2, as
# published by the Free Software Foundation.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
try:
    import re2 as re
except ImportError:
    import re
from Gelatin import INDENT
from Token import Token

class MatchFieldList(Token):
    def __init__(self, modifiers = None):
        self.expressions = []
        self.regex       = None
        self.modifiers   = modifiers

    def when(self, context):
        if not self.regex:
            regex      = ')('.join(e.re_value() for e in self.expressions)
            unire      = unicode(regex, 'latin1')
            self.regex = re.compile('(' + unire + ')', self.modifiers)

        return self.regex.match(context.input, context.start)

    def match(self, context):
        match = self.when(context)
        if not match:
            return None
        context.start += len(match.group(0))
        return match

    def dump(self, indent = 0):
        res = INDENT * indent
        for expr in self.expressions:
            res += expr.dump() + ' '
        return res.rstrip()
